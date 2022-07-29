import { IconText } from 'components/IconText';
import { ProfilePicture } from 'components/ProfilePicture';
import { Title } from 'components/Title';

const Profile = () => (
  <div>
    <div className='flex space-x-0 bg-yellow-100'>
      <ProfilePicture />
      <div>
        <h1>Sebastián Gómez</h1>
        <Title text='Web Developer' />
        <p className='info-title'>sebastian.gomezr11@gmail.com</p>
        <div className='flex'>
          <IconText icon='diamond' iconColor='purple' text='bastian-g11' />
          <IconText icon='diamond' iconColor='purple' text='bastian-g11' />
        </div>
      </div>
    </div>
    <p>
      Systems engineering student from the University of Antioquia, Colombia,
      specialized in software engineering. I am a friendly and open-minded
      person and it is easy for me to get along with different types of people.
      I am good at teamwork, eager to learn new things and experience new
      challenges. I want to acquire new experiences and contribute to the
      general development of a company.
    </p>
  </div>
);
export { Profile };
