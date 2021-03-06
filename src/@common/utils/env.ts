//https://github.com/motdotla/dotenv/blob/master/examples/typescript/src/lib/env.ts
import { config } from 'dotenv';
import { resolve } from 'path';
import { isDevMode, isProductionMode, isTestMode } from './env.utils';

const getEnv = () => {
	let filename = '';
	if (isProductionMode()) {
		filename = '.env.production';
	} else if (isTestMode()) {
		filename = '.env.test';
	} else if (isDevMode()) {
		filename = '.env.development';
	}

	return resolve(__dirname, `../../../${filename}`);
};

config({ path: getEnv(), encoding: 'utf8', debug: undefined });
