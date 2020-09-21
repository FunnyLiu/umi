// 一些运行时依赖的东西，透传react-router
export {
  Link,
  NavLink,
  Prompt,
  Redirect,
  Route,
  Router,
  StaticRouter,
  MemoryRouter,
  Switch,
  matchPath,
  withRouter,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
export { __RouterContext } from 'react-router';

export {
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory,
} from 'history-with-query';
export type { MemoryHistory } from 'history-with-query';

export { default as Plugin, ApplyPluginsType } from './Plugin/Plugin';
export { default as dynamic } from './dynamic/dynamic';
