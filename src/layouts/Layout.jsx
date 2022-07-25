import { Outlet } from 'react-router-dom';

// // delete this
// const Layout = () => <Outlet />;

// replace it with your own layout
const Layout = () => (
  <main className='h-screen flex flex-col'>
    <div className='h-full overflow-y-auto'>
      <Outlet />
    </div>
    <footer className='bg-gray-200 p-3'>footer</footer>
  </main>
);

export default Layout;
