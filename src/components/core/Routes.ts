import FTournament from '../Tournament/Tournament';
import PlayerTable from '../Player/table';
import Pairs from '../Pair/table';
import Stage1Wrapper from '../Stage1/wrapper';
import Stage2 from '../Stage2/model';
import { RedirectionControl } from './RedirectionControls';
import { OrganizationChartDemo } from '../Stage2/table';

type routeType = {
  path: string;
  label: string;
  exact: boolean;
  component: any;
  visible: boolean;
  index: number;
  private: boolean;
};

// Mappatura route
export const routes: routeType[] = [
  { path: '/', label: 'Home', exact: true, component: FTournament, visible: true, private: true, index: 0 },
  {
    path: '/tournament/:tId',
    label: 'Selezione Coppie',
    exact: true,
    component: Pairs,
    visible: false,
    private: true,
    index: 10
  },
  {
    path: '/stage1/:tId',
    label: 'Torneo fase 1',
    exact: true,
    component: Stage1Wrapper,
    visible: false,
    private: true,
    index: 20
  },

  {
    path: '/player',
    label: 'Gestione Giocatori',
    exact: true,
    component: PlayerTable,
    visible: true,
    private: true,
    index: 30
  },
  {
    path: '/stage2/:tId',
    label: 'Torneo fase 2',
    exact: true,
    component: Stage2,
    //component: OrganizationChartDemo,
    visible: !(process.env.NODE_ENV === 'production'),
    private: true,
    index: 40
  },
  // TODO: creare pagina per route not found
  {
    path: '*',
    label: 'Not Found',
    exact: false,
    component: RedirectionControl,
    visible: false,
    private: true,
    index: 1000
  }
];
export default routes;

export function getLabelByPathname(pathName: string): string {
  const element = routes.find(e => e.path === pathName);
  return element ? element.label : `route ${pathName} not found!`;
}

export function getRouteByPathname(pathName: string): routeType | undefined {
  return routes.find(e => e.path === pathName);
}
