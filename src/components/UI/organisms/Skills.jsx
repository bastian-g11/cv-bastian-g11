import { Section } from 'components/UI/molecules/Section';
import { Skill } from 'components/UI/molecules/Skill';

const Skills = () => (
  <Section
    title='Skills'
    background='bg-light-yellow'
    container='horizontal-container justify-center lg:mx-80'
  >
    <Skill title='JavaScript' percentage='70' />
    <Skill title='TypeScript' percentage='60' />
    <Skill title='Node.js' percentage='60' />
    <Skill title='Express' percentage='55' />
    <Skill title='React' percentage='55' />
    <Skill title='HTML' percentage='65' />
    <Skill title='CSS' percentage='65' />
    <Skill title='Git' percentage='70' />
    <Skill title='SQL' percentage='60' />
  </Section>
);

export { Skills };
