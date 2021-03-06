import { logger, dbLogger } from '@core/logger';
import { Umzug, SequelizeStorage, RerunBehavior } from 'umzug';
import { QueryTypes, Sequelize } from 'sequelize';
import { SequelizeConfiguration } from '../config/sequelize/config';
import { getSequelizeEnv } from '../config/sequelize/connection';
import { asyncForEach, fileExtension } from '@core/utils';

// https://github.com/sequelize/umzug/blob/master/examples/1.sequelize-typescript/umzug.ts
// https://github.com/sequelize/umzug

const envConfig: SequelizeConfiguration = getSequelizeEnv();
const uri: string = process.env[envConfig.useEnvVar]!;

export type UmzugContext = {
	context: Sequelize;
};
export const sequelize = new Sequelize(uri, envConfig);

export const umzug = new Umzug({
	migrations: {
		glob: [`./scripts/*migration.${fileExtension()}`, { cwd: __dirname }],
	},
	context: sequelize,
	storage: new SequelizeStorage({ sequelize }),
	logger: dbLogger,
});

export type Migration = typeof umzug._types.migration;

const exclusion = ['00_stats_pairs.migration.ts', '01_stats_players.migration.ts', '02_stats_pairs.migration.ts'];
// Mark all migration as applied when SERVE_FORCE = true
export const markAllAsApplied = async () => {
	logger.info('Marking all migrations as applied...');
	try {
		const pending = await umzug.pending();
		// Truncate table ( to remove incosistent data )
		sequelize.query('TRUNCATE TABLE "SequelizeMeta"');
		for (const migration of pending) {
			if (!exclusion.includes(migration.name)) {
				logger.info('Marking : ', migration.name);
				// Mark thi migration as applied
				sequelize.query('INSERT INTO "SequelizeMeta" ("name") VALUES(:migration_name)', {
					replacements: { migration_name: migration.name },
					type: QueryTypes.INSERT,
					raw: true,
				});
			}
		}
		logger.info('Done...');
	} catch (error) {
		logger.error('Something went wrong trying to mark migration as applied....');
	}
};

export const createViews = async () => {
	await asyncForEach(
		['00_stats_pairs.migration.ts', '01_stats_players.migration.ts', '02_stats_pairs.migration.ts'],
		async (m) => {
			try {
				await umzug.up({ migrations: [m], rerun: RerunBehavior.ALLOW });
			} catch (error) {
				logger.error('Something went wrong creating views....', error);
			}
		}
	);
};

// Checks migrations and run them if they are not already applied. To keep
// track of the executed migrations, a table (and sequelize model) called SequelizeMeta
// will be automatically created (if it doesn't exist already) and parsed.
export const migrationUp = async () => {
	logger.info('Running migration up...');
	await umzug.up();
	logger.info('Migration up complete');
};
export const migrationDown = async () => {
	logger.info('Running migration down...');
	await umzug.down();
	logger.info('Migration down complete');
};
