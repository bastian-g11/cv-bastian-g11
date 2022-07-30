import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer';

const Layout = () => (
  <main className='h-screen flex flex-col'>
    <div className='h-full overflow-y-auto'>
      <Outlet />
      <Footer />
    </div>
  </main>
);

export default Layout;
