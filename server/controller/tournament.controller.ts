import { Router, NextFunction, Response, Request } from 'express';
// Core
import { logger } from '../core/logger';
import {
	asyncMiddleware,
	withAuth,
	withAdminRights,
	controllerLogger,
	withTestAuth,
	doNotCacheThis,
} from '../core/middleware';
// Managers
import {
	listAll,
	findById,
	findByNameAndDate,
	parseBody,
	update,
	deleteTournament,
	convertEntityToDTO,
	deleteAllTournament,
} from '../manager/tournament.manager';
// Models
import Tournament from '../database/tournament.model';
import { TournamentDTO } from '../../src/@common/dto';
import { AppRequest } from './index';
import { entityNotFound, failure, missingParameters, serverError, success } from './common.response';
import { GenericReponse, OmitHistory } from '../../src/@common/models/common.models';
import {
	DeleteTournamentRequest,
	DeleteTournamentResponse,
	FetchTournamentsResponse,
	ReloadTournamentResponse,
	SaveTournamentRequest,
	SaveTournamentResponse,
	UpdateTournamentRequest,
	UpdateTournamentResponse,
} from '../../src/@common/models/tournament.model';
import { unsubscribe } from '../events/events';

// all API path must be relative to /api/v2/tournament
const router = Router();
router.use('/', (req: Request, res: Response, next: NextFunction) =>
	controllerLogger(req, next, 'Tournament Controller', '/api/v2/tournament')
);

// GET
router.get(
	'/list',
	withAuth,
	doNotCacheThis,
	asyncMiddleware(async (req: AppRequest, res: Response) => {
		try {
			const tournamentsList = await listAll(req.user!);
			return success<FetchTournamentsResponse>(
				res,
				{ label: tournamentsList.length > 1 ? 'tournament:loaded_2' : 'tournament:loaded_1' },
				{ tournamentsList }
			);
		} catch (err) {
			return serverError('GET tournament/list error : ', err, res);
		}
	})
);

router.get(
	'/:tId',
	withAuth,
	doNotCacheThis,
	asyncMiddleware(async (req: AppRequest, res: Response) => {
		try {
			if (!req.params.tId) {
				return missingParameters(res);
			}
			const tournament = await findById(req.user!, parseInt(req.params.tId));
			if (!tournament) {
				return entityNotFound(res);
			}
			return success<ReloadTournamentResponse>(res, { label: 'tournament:loaded_1' }, { tournament: tournament! });
		} catch (err) {
			return serverError('GET tournament/{tId} error ! : ', err, res);
		}
	})
);

// PUT
router.put(
	'/update',
	withAuth,
	withAdminRights,
	asyncMiddleware(async (req: AppRequest, res: Response) => {
		try {
			const request: UpdateTournamentRequest = req.body;
			logger.info(`Tournament ${request.tournament.name} updating....`);
			const tournament = await update(req.user!, parseBody(request.tournament));
			logger.info(`Tournament ${request.tournament.name} updated`);
			return success<UpdateTournamentResponse>(res, { label: 'tournament:saved' }, { tournament });
		} catch (err) {
			return serverError('PUT tournament/update error ! : ', err, res);
		}
	})
);

// POST
router.post(
	'/new',
	withAuth,
	withAdminRights,
	asyncMiddleware(async (req: AppRequest, res: Response) => {
		const request: OmitHistory<SaveTournamentRequest> = req.body;
		const model = parseBody(request.tournament);
		const user = req.user!;
		try {
			let t: Tournament | TournamentDTO | null = await findByNameAndDate(model.name, model.date, user);
			if (t) {
				logger.info(`Tournament ${model.name} already exists....`);
				return failure(res, { label: 'tournament:duplicated', options: { name: model.name } });
			}
			model.ownerId = user.id;
			t = await Tournament.create(model);
			const tournament = convertEntityToDTO(t);
			logger.info(`Created Tournament => ${t}`);
			return success<SaveTournamentResponse>(res, { label: 'tournament:saved' }, { tournament });
		} catch (err) {
			return serverError('POST tournament/new error ! : ', err, res);
		}
	})
);

// DELETE
router.delete(
	'/delete',
	withAuth,
	withAdminRights,
	asyncMiddleware(async (req: Request, res: Response) => {
		try {
			const request: DeleteTournamentRequest = req.body;
			await deleteTournament(parseBody(request.tournament));
			return success<DeleteTournamentResponse>(
				res,
				{ label: 'tournament:deleted' },
				{ tournament: request.tournament }
			);
		} catch (error) {
			return serverError('DELETE tournament/delete error ! : ', error, res);
		}
	})
);

router.delete(
	'/test/delete',
	withAuth,
	withAdminRights,
	withTestAuth,
	asyncMiddleware(async (req: Request, res: Response) => {
		try {
			await deleteAllTournament();
			return success(res, { label: 'tournament:deleted' });
		} catch (error) {
			return serverError('DELETE tournament/delete error ! : ', error, res);
		}
	})
);
export default router;
