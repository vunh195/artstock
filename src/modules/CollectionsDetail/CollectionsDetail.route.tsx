import { lazy } from 'react';
import { IRouteProps } from '../index';

export const route = '/collections/detail';

const CollectionsDetailRoute: IRouteProps = {
  path: route,
  exact: true,

  component: lazy(() => import('.')),
  name: 'CollectionsDetail',
};

export default CollectionsDetailRoute;
