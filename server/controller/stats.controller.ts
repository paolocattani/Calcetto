import { Router, Request, Response } from 'express';
import {
	StatsPairRequest1,
	StatsPairRequest2,
	StatsPairResponse,
	StatsPlayerResponse,
} from '../../src/@common/models/stats.model';
import { withAuth, doNotCacheThis, asyncMiddleware } from '../core/middleware';
import { findById } from '../manager/pair.manager';

import { getStatsByPairs, getStatsByPlayer } from '../manager/stats.manager';
import { missingParameters, serverError, success } from './common.response';

const router = Router();

router.get(
	'/player/:playerId',
	withAuth,
	doNotCacheThis,
	asyncMiddleware(async (req: Request, res: Response) => {
		try {
			if (!req.params.playerId) {
				return missingParameters(res);
			}
			const playerId = parseInt(req.params.playerId);
			const statsPlayer = await getStatsByPlayer(playerId);
			return success<StatsPlayerResponse>(res, { label: 'player:loaded' }, { statsPlayer });
		} catch (error) {
			return serverError('GET player/list/:tId error ! : ', error, res);
		}
	})
);

router.get(
	'/pair',
	withAuth,
	doNotCacheThis,
	asyncMiddleware(async (req: Request, res: Response) => {
		try {
			const { player1IdString, player2IdString, pairIdString } = req.query;
			if (!pairIdString && (!player1IdString || player2IdString)) {
				return missingParameters(res);
			}
			let player1Id: number;
			let player2Id: number;
			if (pairIdString) {
				const pairId = parseInt(pairIdString as string);
				const pair = await findById(pairId);
				player1Id = pair.player1Id;
				player2Id = pair.player2Id;
			} else {
				player1Id = parseInt(player1IdString as string);
				player2Id = parseInt(player2IdString as string);
			}
			const statsPair = await getStatsByPairs(player1Id, player2Id);
			return success<StatsPairResponse>(res, { label: 'player:loaded' }, { statsPair });
		} catch (error) {
			return serverError('GET player/list/:tId error ! : ', error, res);
		}
	})
);

export default router;