import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SCREEN_URL } from '../../../libs/constants';
import Sidebar from '../Sidebar';
import Dashboard from '../Dashboard';
import Header from '../Header';

const LayoutContainer = ({
  component: Component,
  isSidebar,
  isDashboard,
  isHeader,
  isRedirect,
  title
}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const dataUser = JSON.parse(localStorage.getItem('data_user'));

  document.title = title + ' • Spotify';

  useEffect(() => {
    if ((!token || !dataUser) && isRedirect) return navigate(SCREEN_URL.LOGIN);
    if (token && dataUser && !isRedirect) return navigate(SCREEN_URL.HOME);
  }, []);

  return (
    <div>
      {isSidebar && <Sidebar />}
      <div
        style={{
          width: '100%',
          marginLeft: isSidebar && isHeader && isDashboard ? 334 : 0
        }}>
        {isHeader && <Header />}
        <Component />
        {isDashboard && <Dashboard />}
      </div>
    </div>
  );
};

export default LayoutContainer;
