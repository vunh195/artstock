import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IRouteProps } from 'modules';
import enhance from 'modules/MainRoute/MainRoute.enhance';
import { IProps } from 'modules/MainRoute/MainRoute.inteface';

const MainRoute = (props: IProps & any) => {
  const { routes } = props;
  if (!routes || routes.length === 0) return null;

  return (
    <Switch>
      {routes.map((route: IRouteProps) => {
        if (route) {
          console.log(route);
          const Component = lazy(() => import(`../${route.name}`));

          return (
            <Route {...route} key={route.path}>
              <Suspense fallback={null}>
                <Component />
              </Suspense>
            </Route>
          );
        }
        return null;
      })}
    </Switch>
  );
};

export default enhance(React.memo(MainRoute));
