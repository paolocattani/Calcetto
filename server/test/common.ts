import {
	AuthenticationResponse,
	DeleteUserRequest,
	LoginRequest,
	RegistrationRequest,
} from '@common/models/auth.model';
import { OmitHistory } from '@common/models/common.models';
import { deleteWrapper, postWrapper } from '@common/utils/fetch.utils';
import AppServer from '../express/AppServer';

import fetch from 'node-fetch';

if (!globalThis.fetch) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	globalThis.fetch = <any>fetch;
}
export const registerTestUser = async (
	registrationRequest: OmitHistory<RegistrationRequest>
): Promise<AuthenticationResponse> =>
	await postWrapper<RegistrationRequest, AuthenticationResponse>('/api/v2/auth/register', registrationRequest);

export const loginTestUser = async (loginRequest: OmitHistory<LoginRequest>): Promise<AuthenticationResponse> =>
	await postWrapper<LoginRequest, AuthenticationResponse>('http://localhost:5001/api/v2/auth/login', loginRequest);

export const deleteTestUser = async (deleteRequest: OmitHistory<DeleteUserRequest>): Promise<AuthenticationResponse> =>
	await deleteWrapper<DeleteUserRequest, AuthenticationResponse>('/api/v2/auth/delete', deleteRequest);

export async function getServer(): Promise<AppServer> {
	const server = new AppServer();
	await server.connect();
	server.start();
	return server;
}
