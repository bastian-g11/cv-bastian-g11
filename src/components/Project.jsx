import { BsXDiamondFill } from 'react-icons/bs';

// TODO: Add icon as a Prop
const Project = ({ title, description, link }) => (
  <div className='flex-container'>
    <BsXDiamondFill className='icon-text' />
    <h1>{title}</h1>
    <p>{description}</p>
    <a className='info-title' href={link}>
      {link}
    </a>
  </div>
);

export { Project };
