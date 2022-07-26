import { Icon } from 'components/Icon';

const Project = ({ icon, iconColor, title, description, link }) => (
  <div className='flex-container'>
    <Icon id={icon} color={iconColor} />
    <h1>{title}</h1>
    <p>{description}</p>
    <a className='info-title' href={link}>
      {link}
    </a>
  </div>
);

export { Project };
