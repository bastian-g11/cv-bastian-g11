import { Section } from 'components/Section';
import { Information } from 'components/Information';

const Education = () => (
  <Section title='Educational History' titleBackground='bg-fuchsia-700'>
    <Information
      title='Software Engineering'
      subTitle='University of Antioquia | Aug 2017 - Present'
    />
    <Information
      title='JavaScript Bootcamp'
      subTitle='Astound Commerce | Oct 2021 - Nov 2021'
    />
    <Information
      title='High School'
      subTitle='Institución Educativa PBRO Luis Rodolfo Gómez Ramírez | Jan 2010 - Dec 2016'
      lastItem='true'
    />
  </Section>
);

export { Education };
