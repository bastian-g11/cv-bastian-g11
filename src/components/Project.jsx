import { Icon } from 'components/Icon';
import { useScreenSize } from 'hooks/useScreenSize';

const ProjectIcon = ({ icon, color }) => (
  <div className='md:shrink-0 w-fit mx-auto md:mx-4 md:self-center'>
    <Icon id={icon} color={color} />
  </div>
);

const Project = ({
  icon,
  iconColor,
  title,
  description,
  link,
  orientation = 'start',
}) => {
  const { screenSize } = useScreenSize();

  return (
    <div className='max-w-md my-2 mx-auto md:max-w-full'>
      <div className='md:flex'>
        {(screenSize.width < 768 || orientation === 'start') && (
          <ProjectIcon icon={icon} color={iconColor} />
        )}
        <div
          className={`p-4 flex-container items-start ${
            orientation === 'start' ? 'md:items-start' : 'md:items-end'
          }`}
        >
          <h1>{title}</h1>
          <p className={`mt-2 text-center md:text-${orientation}`}>
            {description}
          </p>
          <a className='info-title mt-2 hover:underline' href={link}>
            {link}
          </a>
        </div>
        {screenSize.width > 768 && orientation === 'right' && (
          <ProjectIcon icon={icon} color={iconColor} />
        )}
      </div>
    </div>
  );
};

export { Project };
