import { Section } from 'components/Section';
import { Skill } from 'components/Skill';

const Skills = () => (
  <Section title='Skills' titleBackground='bg-violet'>
    <div className='flex flex-wrap justify-center'>
      <Skill title='JavaScript' percentage='80' />
      <Skill title='Node.js' percentage='70' />
      <Skill title='Git' percentage='70' />
      <Skill title='Express' percentage='66' />
      <Skill title='Unity3D' percentage='65' />
      <Skill title='TypeScript' percentage='60' />
      <Skill title='C#' percentage='60' />
      <Skill title='HTML' percentage='60' />
      <Skill title='CSS' percentage='50' />
    </div>
  </Section>
);

export { Skills };
