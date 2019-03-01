import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { getRouterConfig } from './common/router';

function RouterConfig({ history, app }) {
  const routerConfig = getRouterConfig(app);
  return (
    <Router history={history}>
      <Switch>
        {Object.keys(routerConfig).map(item => {
          return <Route key={item} path={item} exact component={routerConfig[item].component} />;
        })}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
