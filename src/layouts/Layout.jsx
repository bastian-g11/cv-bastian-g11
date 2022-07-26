import { Outlet } from 'react-router-dom';

// // delete this
// const Layout = () => <Outlet />;

// replace it with your own layout
const Layout = () => (
  <main className='h-screen flex flex-col'>
    <div className='h-full overflow-y-auto'>
      <Outlet />
      <footer className='bg-gradient-to-b from-main-purple via-violet to-violet p-3 text-white'>
        © 2022 - Sebastián Gómez Ramírez
      </footer>
    </div>
  </main>
);

export default Layout;
