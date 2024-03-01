import { SCREEN_URL } from '../libs/constants';
import { ErrorPage, HomePage, LoginPage } from '../pages';

export const layoutRoutes = [
  {
    path: SCREEN_URL.HOME,
    component: HomePage,
    isSidebar: true,
    isHeader: true,
    isDashboard: true,
    isRedirect: true,
    title: 'Home'
  },
  {
    path: SCREEN_URL.LOGIN,
    component: LoginPage,
    isSidebar: false,
    isHeader: false,
    isDashboard: false,
    isRedirect: true,
    title: 'Login'
  },
  {
    path: SCREEN_URL.ERRORS,
    component: ErrorPage,
    isSidebar: false,
    isFooter: false,
    isRedirect: false,
    title: '404 Not Found'
  }
];
