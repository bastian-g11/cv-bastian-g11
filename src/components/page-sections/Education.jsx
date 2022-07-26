import { Section } from 'components/Section';
import { TimeLineItem } from 'components/TimeLineItem';

const Education = () => (
  <Section title='Educational History' titleBackground='bg-violet'>
    <TimeLineItem
      icon='diamond'
      iconColor='purple'
      title='Software Engineering'
      subTitle='University of Antioquia | Aug 2017 - Present'
      addTimeLine
    />
    <TimeLineItem
      icon='diamond'
      iconColor='purple'
      title='JavaScript Bootcamp'
      subTitle='Astound Commerce | Oct 2021 - Nov 2021'
      addTimeLine
    />
    <TimeLineItem
      icon='diamond'
      iconColor='purple'
      title='High School'
      subTitle='Institución Educativa PBRO Luis Rodolfo Gómez Ramírez | Jan 2010 - Dec 2016'
      lastItem='true'
    />
  </Section>
);

export { Education };
