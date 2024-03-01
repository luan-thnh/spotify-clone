import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { layoutRoutes } from '../configs';
import { ErrorPage } from '../pages';
import loadable from '@loadable/component';
import SplashScreen from '../components/molecules/SplashScreen';

const LayoutContainer = loadable(() => import('../components/organisms/LayoutContainer'), {
  fallback: <SplashScreen />
});

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          {layoutRoutes.map(
            ({ path, component, isSidebar, isDashboard, isHeader, isRedirect, title }) => (
              <Route
                key={title}
                path={path}
                element={
                  <LayoutContainer
                    component={component}
                    isRedirect={isRedirect}
                    isHeader={isHeader}
                    isSidebar={isSidebar}
                    isDashboard={isDashboard}
                    title={title}
                  />
                }
              />
            )
          )}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
