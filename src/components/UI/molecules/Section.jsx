import { Title } from 'components/UI/atoms/Title';

const Section = ({
  title,
  titleBackground = 'bg-main-purple ',
  background = 'bg-white',
  children,
  container = 'block',
}) => (
  <div className={`vertical-container w-full py-8 ${background}`}>
    <Title text={title} background={titleBackground} />
    <div className={`mx-4 ${container}`}>{children}</div>
  </div>
);

export { Section };
