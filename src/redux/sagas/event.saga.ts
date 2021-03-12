import { call, delay, put, race, take, takeEvery } from '@redux-saga/core/effects';
import { cancelled, StrictEffect } from 'redux-saga/effects';
import { EventAction } from '../actions/event.action';
import { Events } from '../../@common/models/event.model';
import { Socket } from 'socket.io-client';
import { socketConnect, createSocketChannel, emitEvent } from '../services/event.service';
import { EventMessage } from 'src/@common/models';
import { TournamentAction } from '../actions';

//-----------------------------------------------
let socket: Socket;

// Listen socket events
function* listenEvents({
	payload: { history },
}: ReturnType<typeof EventAction.openChannel.request>): Generator<StrictEffect, void, any> {
	try {
		// Try to connect with 2sec timeout
		const { connected, timeout } = yield race({ connected: call(socketConnect), timeout: delay(20000) });
		// If timeout won the race then
		if (timeout) {
			const message: EventMessage = yield put(EventAction.closeChannel.request({}));
			console.log('[ Event ].listenEvents : ', message);
		}
		socket = connected;
		const socketChannel = yield call(createSocketChannel, connected, history);
		yield put(EventAction.openChannel.success({ connected: true }));
		while (true) {
			const message: EventMessage = yield take(socketChannel);
			switch (message.event) {
				case Events.TOURNAMENT_REFRESH:
					yield put(TournamentAction.reset({}));
					yield put(TournamentAction.fetch.request({}));
					break;
				case Events.TOURNAMENT_NEW:
					yield put(TournamentAction.reset({}));
					break;
				case Events.TOURNAMENT_JOIN:
					yield put(TournamentAction.fetch.request({}));
					break;
				default:
					break;
			}
		}
	} catch (error) {
		yield put(EventAction.closeChannel.request({}));
	} finally {
		if (yield cancelled()) {
			socket.disconnect();
			yield put(EventAction.closeChannel.request({}));
		}
	}
}

// Emit Events.TOURNAMENT_NEW
function* newTournament({ payload: { tournament } }: ReturnType<typeof EventAction.newTournament.request>) {
	yield emitEvent(Events.TOURNAMENT_NEW, EventAction.newTournament, tournament);
}

// Emit Events.TOURNAMENT_JOIN
function* joinTournament({ payload: { tournament } }: ReturnType<typeof EventAction.joinTournament.request>) {
	yield emitEvent(Events.TOURNAMENT_JOIN, EventAction.joinTournament, tournament);
}

// Emit Events.TOURNAMENT_LEAVE
function* leaveTournament({ payload: { tournament } }: ReturnType<typeof EventAction.leaveTournament.request>) {
	yield emitEvent(Events.TOURNAMENT_LEAVE, EventAction.leaveTournament, tournament);
}

// Close socket channel
function* closeChannel({ payload }: ReturnType<typeof EventAction.closeChannel.request>) {
	try {
		socket.close();
		yield put(EventAction.closeChannel.success({}));
	} catch (error) {
		yield put(EventAction.closeChannel.failure({}));
	}
}

export const EventSagas = [
	takeEvery(EventAction.openChannel.request, listenEvents),
	takeEvery(EventAction.closeChannel.request, closeChannel),
	takeEvery(EventAction.joinTournament.request, joinTournament),
	takeEvery(EventAction.leaveTournament.request, leaveTournament),
	takeEvery(EventAction.newTournament.request, newTournament),
];