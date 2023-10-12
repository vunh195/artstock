import { lazy } from 'react';
import { IRouteProps } from '../index';

export const route = '/';

const HomeRoute: IRouteProps = {
  path: route,
  exact: true,

  component: lazy(() => import('.')),
  name: 'Home',
};

export default HomeRoute;
