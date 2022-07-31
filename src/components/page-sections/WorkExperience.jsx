import { Section } from 'components/Section';
import { ListItem } from 'components/ListItem';

const WorkExperience = () => (
  <Section title='Work Experience' titleBackground='bg-violet'>
    <ListItem
      icon='diamond'
      iconColor='purple'
      title='SFCC Developer'
      subTitle='Astound Commerce | Jan 2022 - Present'
      addTimeLine
    />
    <ListItem
      icon='diamond'
      iconColor='purple'
      title='Mobile App Developer'
      subTitle='Corantioquia - Piragua | Feb 2021 - Jul 2021'
      addTimeLine
    />
    <ListItem
      icon='diamond'
      iconColor='purple'
      title='Unity 3D Developer'
      subTitle='Ude@ - UdeAldeA | Jan 2020 - Aug 2020'
      addTimeLine
    />
    <ListItem
      icon='diamond'
      iconColor='purple'
      title='Videogames Development Tutor'
      subTitle='University of Antioquia | May 2019 - Jul 2019'
    />
  </Section>
);

export { WorkExperience };
