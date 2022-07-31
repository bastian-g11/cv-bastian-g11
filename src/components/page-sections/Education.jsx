import { Section } from 'components/Section';
import { ListItem } from 'components/ListItem';

const Education = () => (
  <Section title='Educational History' titleBackground='bg-violet'>
    <ListItem
      icon='diamond'
      iconColor='violet'
      title='Software Engineering'
      subTitle='University of Antioquia | Aug 2017 - Present'
      addTimeLine
    />
    <ListItem
      icon='diamond'
      iconColor='violet'
      title='JavaScript Bootcamp'
      subTitle='Astound Commerce | Oct 2021 - Nov 2021'
      addTimeLine
    />
    <ListItem
      icon='diamond'
      iconColor='violet'
      title='High School'
      subTitle='Institución Educativa PBRO Luis Rodolfo Gómez Ramírez | Jan 2010 - Dec 2016'
    />
  </Section>
);

export { Education };
