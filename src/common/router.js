import { createElement } from 'react';
import dynamic from 'dva/dynamic';

let routerDataCache;

/**
 * @description 通过自定义的module是否存在于命名空间，不存在就require让它存在于命名空间中
 * app._models就是所有的models  =>{effects, namespace, reducers, state, subscriptions}
 */
const modelNotExisted = (app, model) =>
  // eslint-disable-next-line
  !app._models.some(({ namespace }) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  });

export const getRouterConfig = app => {
  const routerConfig = {
    '/': {
      component: dynamicWrapper(app, [], () => import('../routes/Index')),
    },
    '/detail': {
      component: dynamicWrapper(app, [], () => import('../routes/Detail')),
    },
  };
  return routerConfig;
};

// wrapper of dynamic
function dynamicWrapper(app, models, component) {
  // () => require('module')
  // transformed by babel-plugin-dynamic-import-node-sync
  if (component.toString().indexOf('.then(') < 0) {
    models.forEach(model => {
      if (modelNotExisted(app, model)) {
        // eslint-disable-next-line
        app.model(require(`../models/${model}`).default);
      }
    });
    return props => {
      if (!routerDataCache) {
        routerDataCache = getRouterConfig(app);
      }
      return createElement(component().default, {
        ...props,
        routerData: routerDataCache,
      });
    };
  }
  // () => import('module')
  return dynamic({
    app,
    models: () =>
      models.filter(model => modelNotExisted(app, model)).map(m => import(`../models/${m}.js`)),
    // add routerData prop
    component: () => {
      if (!routerDataCache) {
        routerDataCache = getRouterConfig(app);
      }
      return component().then(raw => {
        const Component = raw.default || raw;
        return props =>
          createElement(Component, {
            ...props,
            routerData: routerDataCache,
          });
      });
    },
  });
}
