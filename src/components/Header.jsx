import { IconText } from 'components/IconText';
import { Title } from 'components/Title';

const Header = () => (
  <div className='w-full flex-container'>
    <h1>Sebastián Gómez Ramírez</h1>
    <Title text='Web Developer' />
    <p className='info-title'>sebastian.gomezr11@gmail.com</p>
    <div className='flex'>
      <a href='https://github.com/bastian-g11'>
        <IconText icon='github' iconColor='purple' text='bastian-g11' />
      </a>
      <a href='https://www.linkedin.com/in/bastian-g11/'>
        <IconText icon='linkedin' iconColor='purple' text='bastian-g11' />
      </a>
    </div>
  </div>
);

export { Header };
