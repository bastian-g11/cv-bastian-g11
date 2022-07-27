import { Section } from 'components/Section';
import { InfoIcon } from 'components/InfoIcon';

const Education = () => (
  <Section title='Educational History' titleBackground='bg-violet'>
    <InfoIcon
      icon='diamond'
      iconColor='purple'
      title='Software Engineering'
      subTitle='University of Antioquia | Aug 2017 - Present'
      addTimeLine
    />
    <InfoIcon
      icon='diamond'
      iconColor='purple'
      title='JavaScript Bootcamp'
      subTitle='Astound Commerce | Oct 2021 - Nov 2021'
      addTimeLine
    />
    <InfoIcon
      icon='diamond'
      iconColor='purple'
      title='High School'
      subTitle='Institución Educativa PBRO Luis Rodolfo Gómez Ramírez | Jan 2010 - Dec 2016'
      lastItem='true'
    />
  </Section>
);

export { Education };
