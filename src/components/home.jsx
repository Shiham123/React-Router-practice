import { Outlet } from 'react-router-dom';
import Layout from './layout';
import Navbar from './navbar';
import Header from './header';
import Footer from './footer';

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
