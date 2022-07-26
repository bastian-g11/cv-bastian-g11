import { BsXDiamondFill } from 'react-icons/bs';

// TODO: Make icon a parameter
const IconText = ({ text }) => (
  <div className='flex-container'>
    <BsXDiamondFill className='icon-text' />
    <p className='info-title'>{text}</p>
  </div>
);

export { IconText };
