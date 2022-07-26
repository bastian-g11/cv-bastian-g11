import { Icon } from 'components/Icon';

// TODO: Make icon a parameter
const IconText = ({ icon, iconColor, text }) => (
  <div className='flex-container'>
    <Icon id={icon} color={iconColor} />
    <p className='info-title'>{text}</p>
  </div>
);

export { IconText };
