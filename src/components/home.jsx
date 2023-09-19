import { Outlet, useLocation } from 'react-router-dom';
import Layout from './layout';
import Navbar from './navbar';

const Home = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Layout>
      <Navbar />
      {isHome && <h1>this is home</h1>}
      <Outlet />
    </Layout>
  );
};

export default Home;
