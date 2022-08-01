import { Title } from 'components/UI/atoms/Title';
import { IconText } from 'components/UI/molecules/IconText';

const Header = () => (
  <div className='w-full vertical-container'>
    <h1>Sebastián Gómez Ramírez</h1>
    <Title text='Web Developer' />
    <p className='info-title'>sebastian.gomezr11@gmail.com</p>
    <div className='flex'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/bastian-g11'
      >
        <IconText icon='github' iconColor='purple' text='bastian-g11' />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/bastian-g11/'
      >
        <IconText icon='linkedin' iconColor='purple' text='bastian-g11' />
      </a>
    </div>
  </div>
);

export { Header };
