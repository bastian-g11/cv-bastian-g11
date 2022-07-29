import { Title } from 'components/Title';

const Section = ({
  title,
  titleBackground = 'bg-main-purple ',
  background = 'bg-white',
  children,
}) => (
  <div className={`w-full pt-4 ${background}`}>
    <Title text={title} background={titleBackground} />
    <div className='flex-container  mx-4'>
      <div>{children}</div>
    </div>
  </div>
);

export { Section };
