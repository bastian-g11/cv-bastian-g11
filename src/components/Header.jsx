import { IconText } from 'components/IconText';
import { Title } from 'components/Title';

const Header = () => (
  <div className='w-full flex-container'>
    <h1 className='title'>Sebastián Gómez Ramírez</h1>
    <Title text='Web Developer' />
    <p className='info-title'>sebastian.gomezr11@gmail.com</p>
    <div className='flex'>
      <IconText icon='github' iconColor='purple' text='bastian-g11' />
      <IconText icon='linkedin' iconColor='purple' text='bastian-g11' />
    </div>
  </div>
);

export { Header };
