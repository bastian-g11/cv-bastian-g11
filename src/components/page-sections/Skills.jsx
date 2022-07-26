import { Section } from 'components/Section';
import { Skill } from 'components/Skill';

const Skills = () => (
  <Section title='Skills' background='bg-yellow-200'>
    <Skill title='JavaScript' percentage='20' />
    <Skill title='Node.js' percentage='40' />
  </Section>
);

export { Skills };
