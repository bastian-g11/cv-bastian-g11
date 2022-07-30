import { Icon } from 'components/Icon';

const Project = ({ icon, iconColor, title, description, link }) => (
  <div className='max-w-md my-2 mx-auto md:max-w-full'>
    <div className='md:flex'>
      <div className='md:shrink-0 w-fit mx-auto md:m-0 md:ml-8 md:self-center'>
        <Icon id={icon} color={iconColor} />
      </div>
      <div className='p-4 flex-container md:items-start'>
        <h1>{title}</h1>
        {/* TODO: Make orientation a prop */}
        <p className='mt-2 text-center md:text-start'>{description}</p>
        <a className='info-title mt-2 hover:underline' href={link}>
          {link}
        </a>
      </div>
      {/* <div className='md:shrink-0 w-fit mx-auto md:ml-8 md:self-center'>
        <Icon id={icon} color={iconColor} />
      </div> */}
    </div>
  </div>
);

export { Project };
