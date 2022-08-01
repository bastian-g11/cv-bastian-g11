import { Icon } from 'components/Icon';

const IconText = ({ icon, iconColor, text }) => (
  <div className='vertical-container m-2'>
    <Icon id={icon} color={iconColor} />
    <p className='info-title'>{text}</p>
  </div>
);

export { IconText };
