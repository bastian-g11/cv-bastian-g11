import { Section } from 'components/UI/molecules/Section';
import { ListItem } from 'components/UI/molecules/ListItem';

const Certifications = () => (
  <Section
    title='Certifications'
    titleBackground='bg-violet'
    container='horizontal-container'
  >
    <div>
      <ListItem
        icon='certification'
        iconColor='violet'
        title='Web Development Bootcamp'
        subTitle='Udemy'
      />
      <ListItem
        icon='certification'
        iconColor='violet'
        title='Introduction to MongoDB'
        subTitle='Coursera'
      />
    </div>
    <div>
      <ListItem
        icon='certification'
        iconColor='violet'
        title='IntegraTIC 2020'
        subTitle='University of Antioquia'
      />
      <ListItem
        icon='certification'
        iconColor='violet'
        title='German Course #6'
        subTitle='University of Antioquia | Multilingua'
      />
    </div>
  </Section>
);

export { Certifications };
