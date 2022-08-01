import { Information } from 'components/Information';
import { Icon } from 'components/Icon';

const ListItem = ({
  icon,
  iconColor,
  title,
  subTitle,
  addTimeLine = false,
}) => (
  <div className='flex gap-4'>
    <div className='vertical-container mt-2'>
      <Icon id={icon} props={{ color: iconColor }} />
      {addTimeLine && (
        <div className='border-l-2 border-medium-gray h-8 mt-2' />
      )}
    </div>
    <Information title={title} subTitle={subTitle} />
  </div>
);

export { ListItem };
