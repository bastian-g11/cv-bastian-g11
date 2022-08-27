import { ProfilePicture } from 'components/UI/molecules/ProfilePicture';
import { Header } from 'components/UI/molecules/Header';

const Description = () => (
  <p className='text-center mt-4 mx-4 md:mx-32'>
    Systems engineering student from the University of Antioquia, Colombia,
    specialized in software engineering. I am a friendly and open-minded person
    and it is easy for me to get along with different types of people. I am good
    at teamwork, eager to learn new things and experience new challenges. I want
    to acquire new experiences and contribute to the general development of a
    company.
  </p>
);

const Profile = () => (
  <div className='bg-light-yellow py-8'>
    <ProfilePicture />
    <Header />
    <Description />
  </div>
);
export { Profile };
