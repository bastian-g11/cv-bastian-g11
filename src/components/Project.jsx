import { BsXDiamondFill } from 'react-icons/bs';

// TODO: Add icon as a Prop
const Project = ({ title, description, link }) => (
  <div className='flex flex-col items-center'>
    <BsXDiamondFill className='text-4xl text-indigo-500' />
    <h1 className='text-lg font-bold'>{title}</h1>
    <p className='text-sm text-gray-800'>{description}</p>
    <p className='text-sm text-gray-500'>{link}</p>
  </div>
);

export { Project };
