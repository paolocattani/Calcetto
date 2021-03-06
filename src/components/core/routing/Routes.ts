import React, { lazy } from 'react';
import { MaleIcon, FileMedicalIcon } from '../icons';

const lazySwagger = lazy(() => import('../../Swagger/Swagger'));
const lazyPlayer = lazy(() => import('../../Player/table.component'));
const lazyPlayerEdit = lazy(() => import('../../Player/edit.component'));
const lazyTournament = lazy(() => import('../../Tournament/wrapper.component'));
const lazyPairs = lazy(() => import('../../Pair/table.component'));
const lazyStage1 = lazy(() => import('../../Stage1/wrapper.component'));
const lazyStage2 = lazy(() => import('../../Stage2/handler.component'));
const lazyLogin = lazy(() => import('../../Auth/Wrapper'));
const lazyUser = lazy(() => import('../../Auth/Edit'));
const lazyRedirectionControl = lazy(() =>
	import('../generic/Commons').then((module) => ({ default: module.RedirectionControl }))
);

export interface ProtectedRouteProps {
	path: string;
	label: string;
	exact: boolean;
	componentToRender: React.LazyExoticComponent<React.ComponentType<any>>;
	icon?: React.ComponentType;
	visible: boolean;
	index: number;
	private: boolean;
}

// Mappatura route
export const routes: ProtectedRouteProps[] = [
	{
		path: '/login',
		label: 'route.login',
		exact: true,
		componentToRender: lazyLogin,
		visible: false,
		private: false,
		index: 0,
	},
	{
		path: '/',
		label: 'route.home',
		exact: true,
		componentToRender: lazyTournament,
		visible: false,
		private: true,
		index: 10,
	},
	{
		path: '/tournament',
		label: 'route.tournament',
		exact: true,
		componentToRender: lazyPairs,
		visible: false,
		private: true,
		index: 20,
	},
	{
		path: '/stage1',
		label: 'route.stage1',
		exact: true,
		componentToRender: lazyStage1,
		visible: false,
		private: true,
		index: 30,
	},
	{
		path: '/player',
		label: 'route.player',
		exact: true,
		componentToRender: lazyPlayer,
		icon: MaleIcon,
		visible: true,
		private: true,
		index: 40,
	},
	{
		path: '/player/edit',
		label: 'route.player',
		exact: true,
		componentToRender: lazyPlayerEdit,
		visible: false,
		private: true,
		index: 41,
	},
	{
		path: '/user',
		label: 'route.user',
		exact: true,
		componentToRender: lazyUser,
		visible: false,
		private: true,
		index: 50,
	},
	{
		path: '/stage2',
		label: 'route.stage2',
		exact: true,
		componentToRender: lazyStage2,
		visible: false,
		private: true,
		index: 60,
	},
	{
		path: '/swagger',
		label: 'route.swagger',
		exact: true,
		componentToRender: lazySwagger,
		icon: FileMedicalIcon,
		visible: true,
		private: true,
		index: 70,
	},
	// TODO: creare pagina per route not found
	{
		path: '*',
		label: 'route.notFound',
		exact: false,
		componentToRender: lazyRedirectionControl,
		visible: false,
		private: true,
		index: 1000,
	},
];
export default routes;

export function getLabelByPathname(pathName: string): string {
	const element = routes.find((e) => e.path === pathName);
	return element ? element.label : `route ${pathName} not found!`;
}

export function getRouteByPathname(pathName: string): ProtectedRouteProps | undefined {
	return routes.find((e) => e.path === pathName);
}
