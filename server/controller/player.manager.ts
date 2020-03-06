import { Router } from 'express';
import Player from '../model/sequelize/player.model';
import { logger } from '../core/logger';
import { isDevMode } from '../core/debug';

const router = Router();
router.use('/', (req, res, next) => {
  if (isDevMode()) logger.info(`Player Manager : ${req.method} ${req.originalUrl.replace('/api/player', '')} `);
  next();
});

router.get('/list/:tId', async (req, res, next) => {
  try {
    logger.info('/list/:tId ......');
    const tId = req.params.tId ? parseInt(req.params.tId) : 0;
    const users = await Player.findAll({
      order: [
        ['alias', 'DESC'],
        ['name', 'DESC'],
        ['surname', 'DESC']
      ],
      include: [Player.associations.pair1, Player.associations.pair2]
    });
    const result = users
      .filter(player => {
        // Se il giocatore non ha alias o nome lo escludo in quanto non sarebbe identificabile nella selezione delle coppie
        if (player.alias === '' && player.name === '') return false;
        // Se non è ancora stato assegnato a nessuno coppia allora è disponibile
        if (!player.pair1 && !player.pair2) return true;
        /*
         * Se il giocatore è gia stato assegnato ad una coppia ( in posizione 1 o 2 )
         * che appartiene al torneo che sto analizzando allora lo devo escludere
         * perchè non è piu tra quelli selezionabili
         */
        if (
          (player.pair1 && player.pair1.find(e => e.tournamentId === tId)) ||
          (player.pair2 && player.pair2.find(e => e.tournamentId === tId))
        )
          return false;
        else return true;
      })
      // Rimappo per escludere le associazioni
      .map(player => ({
        id: player.id,
        name: player.name,
        surname: player.surname,
        alias: player.alias,
        label: player.label,
        email: player.email,
        phone: player.phone,
        role: player.role,
        match_played: player.match_played,
        match_won: player.match_won,
        total_score: player.total_score,
        editable: player.editable
      }));
    // logger.info(JSON.stringify(result, null, 2));
    return res.json(result);
  } catch (err) {
    return next(err);
  }
});

router.get('/list', async (req, res, next) => {
  try {
    const users = await Player.findAll({
      order: [['id', 'DESC']],
      include: [Player.associations.pair1, Player.associations.pair2]
    });

    //logger.info(users);
    return res.json(
      users // Rimappo per escludere le associazioni
        .map(player => ({
          id: player.id,
          name: player.name,
          surname: player.surname,
          alias: player.alias,
          label: player.label,
          email: player.email,
          phone: player.phone,
          role: player.role,
          match_played: player.match_played,
          match_won: player.match_won,
          total_score: player.total_score,
          editable: player.editable
        }))
    );
  } catch (err) {
    return next(err);
  }
});

router.post('/', async (req, res, next) => {
  const model = req.body;
  // logger.info('Player post Model : ', model);
  if (model.id === 0) model.id = null;
  try {
    let player: Player | null = null;
    if (model.id) player = await Player.findOne({ where: { id: model.id } });
    if (player) {
      player.update(model);
      logger.info(`updated => ${player.toString()}`);
    } else {
      player = await Player.create(model);
      logger.info(`created => ${player.toString()}`);
    }
    return res.status(200).json(player);
  } catch (err) {
    return next(err);
  }
});

router.delete('/', async (req, res, next) => {
  const models: Player[] | [] = req.body || [];
  let rowsAffected = 0;
  for (const model of models) {
    const player = await Player.findByPk(model.id);
    if (player) {
      await player?.destroy();
      rowsAffected++;
    }
  }
  return res.status(200).json({ message: `Rows deleted : ${rowsAffected}` });
});

export default router;
