import { Icon } from 'components/UI/atoms/Icon';

const Footer = () => (
  <footer className='horizontal-container justify-center items-center bg-gradient-to-b  from-main-purple via-violet to-violet p-3 text-white'>
    © 2022 - Sebastián Gómez Ramírez
    <Icon id='bear' props={{ color: 'white' }} />
  </footer>
);

export { Footer };
