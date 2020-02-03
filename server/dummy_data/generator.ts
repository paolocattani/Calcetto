import Player from '../model/sequelize/player.model';
import Pair from '../model/sequelize/pair.model';
import { getRandomIntInclusive } from '../core/utils';
import Tournament from '../model/sequelize/tournament.model';
import { logger } from '../core/logger';
import { isProductionMode } from '../core/debug';
import chalk from 'chalk';

const TOURNAMENT_RECORDS = 10;
const PLAYER_RECORDS = 20;
const PAIRS_RECORDS = 20;

export default async function generator(start: boolean): Promise<void> {
  if (start === false || isProductionMode()) {
    return;
  }

  logger.info(chalk.cyan.bold('Starting dummy data generator....'));
  await tournamentGenerator();
  await playerGenerator();
  await pairGenerator();
  logger.info(chalk.cyan.bold('Generation complete !'));
}

async function tournamentGenerator(): Promise<void> {
  for (let ii = 1; ii <= TOURNAMENT_RECORDS; ii++) {
    const model = {
      id: null,
      name: ii,
      ownerId: 1,
      progress: '1',
      public: true
    };
    await Tournament.create(model);
  }
}

async function playerGenerator(): Promise<void> {
  for (let ii = 1; ii <= PLAYER_RECORDS; ii++) {
    const model = {
      id: null,
      name: `Nome${ii}`,
      surname: `Cognome${ii}`,
      alias: `Alias${ii}`,
      role: getRandomIntInclusive(0, 2)
    };
    await Player.create(model);
  }
}

async function pairGenerator(): Promise<void> {
  for (let ii = 1; ii <= PAIRS_RECORDS; ii++) {
    const model = {
      id: null,
      tournamentId: 1,
      player1Id: getRandomIntInclusive(1, PLAYER_RECORDS),
      player2Id: getRandomIntInclusive(1, PLAYER_RECORDS),
      pairAlias: `PAlias${ii}`,
      stage1Name: getRandomIntInclusive(1, 3)
    };
    await Pair.create(model);
  }
}
