import { Router, Request, Response, NextFunction } from 'express';
import {
	DeletePlayersRequest,
	DeletePlayersResponse,
	FetchPlayersResponse,
	SavePlayerRequest,
	SavePlayerResponse,
} from '../../src/@common/models/player.model';
import { withAuth, asyncMiddleware, controllerLogger, withAdminRights } from '../core/middleware';
import {
	create,
	deletePlayer,
	parseBody,
	listAll,
	listAllInTournament,
	update,
	findByNameSurname,
	findById,
} from '../manager/player.manager';
import { entityNotFound, failure, missingParameters, serverError, success } from './common.response';

const router = Router();

router.get(
	'/list/:tId',
	withAuth,
	withAdminRights,
	asyncMiddleware(async (req: Request, res: Response) => {
		try {
			const playersList = await listAllInTournament(req.params.tId ? parseInt(req.params.tId) : 0);
			return success<FetchPlayersResponse>(res, { label: 'player:loaded' }, { playersList });
		} catch (error) {
			return serverError('GET player/list/:tId error ! : ', error, res);
		}
	})
);

router.get(
	'/list',
	withAuth,
	asyncMiddleware(async (req: Request, res: Response) => {
		try {
			const playersList = await listAll();
			return success<FetchPlayersResponse>(res, { label: 'player:loaded' }, { playersList });
		} catch (error) {
			return serverError('GET player/list/ error ! : ', error, res);
		}
	})
);

router.put(
	'/update',
	withAuth,
	withAdminRights,
	asyncMiddleware(async (req: Request, res: Response) => {
		const { player: dto } = req.body as SavePlayerRequest;
		try {
			let player = await findById(dto.id!);
			if (!player) {
				return entityNotFound(res);
			}
			// Aggiungere controlli
			let playerTest = await findByNameSurname(dto.name, dto.surname);
			if (playerTest && playerTest.id !== player.id) {
				return failure(res, { label: 'player:duplicated' }, 'Player already exists');
			}
			await update(dto);
			return success<SavePlayerResponse>(res, { label: 'player:updated' }, { player: dto });
		} catch (error) {
			return serverError('PUT player/update error ! : ', error, res);
		}
	})
);

router.post(
	'/new',
	withAuth,
	withAdminRights,
	asyncMiddleware(async (req: Request, res: Response) => {
		const { player: model } = req.body as SavePlayerRequest;
		try {
			if (!model.name || !model.surname) {
				return missingParameters(res);
			}
			let player = await findByNameSurname(model.name, model.surname);
			if (player) {
				return failure(res, { label: 'player:duplicated' }, 'Player already exists');
			}
			const dto = await create(model);
			return success<SavePlayerResponse>(res, { label: 'player:saved' }, { player: dto });
		} catch (error) {
			return serverError('POST player/new error ! : ', error, res);
		}
	})
);

router.delete(
	'/delete',
	withAuth,
	withAdminRights,
	asyncMiddleware(async (req: Request, res: Response) => {
		try {
			const request: DeletePlayersRequest = req.body;
			const rowsAffected = await deletePlayer(request.players.map((e) => parseBody(e)));
			return success<DeletePlayersResponse>(
				res,
				{ label: rowsAffected > 1 ? 'player:deleted_2' : 'player:deleted_1' },
				{ playersList: request.players }
			);
		} catch (error) {
			return serverError('DELETE player/delete error ! : ', error, res);
		}
	})
);

export default router;
