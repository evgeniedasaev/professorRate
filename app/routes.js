// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }
    },
    {
      path: '/search/:qtail',
      name: 'search',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
              import('containers/SearchPage/reducer'),
              import('containers/SearchPage/sagas'),
              import('containers/SearchPage'),
            ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('search', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }
    },    
    {
      path: '/professor/:id',
      name: 'professor',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ProfessorPage/reducer'),
          import('containers/ProfessorPage/sagas'),
          import('containers/ProfessorPage'),
        ]);

          const renderRoute = loadModule(cb);

          importModules.then(([reducer, sagas, component]) => {
            injectReducer('professor', reducer.default);
            injectSagas(sagas.default);

            renderRoute(component);
          });

          importModules.catch(errorLoading);
      }
    },
    {
      path: '/signin',
      name: 'signin',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/SigninPage/sagas'),
          import('containers/SigninPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([sagas, component]) => {
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }
    },
    {
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/LoginPage/sagas'),
          import('containers/LoginPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([sagas, component]) => {
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
