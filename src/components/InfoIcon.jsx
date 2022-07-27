import { Information } from 'components/Information';
import { Icon } from 'components/Icon';

const InfoIcon = ({
  icon,
  iconColor,
  title,
  subTitle,
  addTimeLine = false,
}) => (
  <div className='flex gap-4'>
    <div className='flex-container mt-2'>
      <Icon id={icon} color={iconColor} />
      {addTimeLine && <div className='border-l-2 border-gray-500 h-8 mt-2' />}
    </div>
    <Information title={title} subTitle={subTitle} />
  </div>
);

export { InfoIcon };
