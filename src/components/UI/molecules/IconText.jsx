import { Icon } from 'components/UI/atoms/Icon';

const IconText = ({ icon, iconColor, text }) => (
  <div className='vertical-container m-2'>
    <Icon id={icon} props={{ color: iconColor }} />
    <p className='info-title'>{text}</p>
  </div>
);

export { IconText };
