import { Title } from 'components/Title';

const Section = ({
  title,
  titleBackground = 'bg-main-purple ',
  background = 'bg-white',
  children,
}) => (
  <div className={`flex-container w-full pt-4 ${background}`}>
    <Title text={title} background={titleBackground} />
    <div className=' mx-4'>{children}</div>
  </div>
);

export { Section };
