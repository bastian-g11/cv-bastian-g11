import { Icon } from 'components/UI/atoms/Icon';
import { useScreenSize } from 'hooks/useScreenSize';

const ProjectIcon = ({ icon, color }) => (
  <div className='md:shrink-0 w-fit mx-auto md:mx-0 md:self-center'>
    <Icon id={icon} props={{ color }} />
  </div>
);

const Project = ({
  icon,
  iconColor,
  title,
  description,
  link,
  alignStart = true,
}) => {
  const { screenSize } = useScreenSize();

  return (
    <div className='max-w-md my-2 mx-auto md:max-w-full'>
      <div className='md:flex justify-end'>
        {(screenSize.width < 768 || alignStart) && (
          <ProjectIcon icon={icon} color={iconColor} />
        )}
        <div
          className={`p-4 vertical-container ${
            alignStart ? 'md:items-start' : 'md:items-end'
          }`}
        >
          <h1>{title}</h1>
          <p
            className={`mt-2 text-center ${
              alignStart ? 'md:text-start' : 'md:text-right'
            }`}
          >
            {description}
          </p>
          <a className='info-title mt-2 hover:underline' href={link}>
            {link}
          </a>
        </div>
        {screenSize.width > 768 && !alignStart && (
          <ProjectIcon icon={icon} color={iconColor} />
        )}
      </div>
    </div>
  );
};

export { Project };
