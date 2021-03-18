/**
 * @returns default logger configuration
 */
import log4js from 'log4js';
import chalk from 'chalk';
import { isProductionMode } from '@common/utils/env.utils';

log4js.configure({
	pm2: isProductionMode(),
	pm2InstanceVar: 'PM2_INSTANCE_ID',
	appenders: {
		console: { type: 'stdout' },
		'dev-logger': {
			type: 'dateFile',
			filename: 'server.log',
			pattern: '.yyyy-MM-dd',
			maxLogSize: 10485760,
			backups: 2,
			compress: true,
		},
		'db-logger': {
			type: 'dateFile',
			filename: 'db.log',
			pattern: '.yyyy-MM-dd',
			maxLogSize: 10485760,
			backups: 1,
			compress: true,
		},
	},
	categories: {
		default: {
			appenders: ['console', 'dev-logger'],
			level: 'info',
		},
		server: {
			appenders: ['console', 'dev-logger'],
			level: 'info',
		},
		database: {
			appenders: ['console', 'db-logger'],
			level: 'info',
		},
	},
});

export const logger = log4js.getLogger('server');
export const dbLogger = log4js.getLogger('database');

if (isProductionMode()) {
	logger.level = 'info';
	dbLogger.level = 'info';
} else {
	logger.level = 'debug';
	dbLogger.level = 'debug';
}

// Controller/Manager
export const logProcess = (method: string, value: string, ...rest: any) =>
	logger.info(`[${chalk.yellow(method)}].${value}`, ...rest);

// Start/End migration
export const logMigrationStart = (method: string, name: string) =>
	logger.info(`Running migration ${chalk.red.bold(method)} : ${chalk.yellow(name)}`);

export const logMigrationEnd = (method: string, name: string) =>
	logger.info(`Migration ${chalk.red.bold(method)} ${chalk.yellow(name)} done!`);

// A standard form to log events
export const logEvent = (str: string, ...args: any) =>
	logger.info(`${chalk.blueBright('[ Event ]')} : ${str} `, ...args);
