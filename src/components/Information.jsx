import { BsXDiamondFill } from 'react-icons/bs';

// TODO: Add icon as a Prop
const Information = ({ title, subTitle, lastItem }) => (
  <div className='flex items-start gap-4'>
    <div className='flex-container mt-2'>
      <BsXDiamondFill className='text-4xl text-indigo-500' />
      {!lastItem && <div className='border-l-2 border-gray-500 h-8 mt-2' />}
    </div>
    <div>
      <h1>{title}</h1>
      <hr className='border-gray-500' />
      <p className='info-title'>{subTitle}</p>
    </div>
  </div>
);

export { Information };
