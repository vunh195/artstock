import { lazy } from 'react';
import { IRouteProps } from '../index';

export const route = '/collections';

const CollectionsRoute: IRouteProps = {
  path: route,
  exact: true,

  component: lazy(() => import('.')),
  name: 'Collections',
};

export default CollectionsRoute;
