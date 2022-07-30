import { Section } from 'components/Section';
import { InfoIcon } from 'components/InfoIcon';

const Certifications = () => (
  <Section
    title='Certifications'
    titleBackground='bg-violet'
    container='horizontal-section'
  >
    <div>
      <InfoIcon
        icon='certification'
        iconColor='purple'
        title='Web Development Bootcamp'
        subTitle='Udemy'
      />
      <InfoIcon
        icon='certification'
        iconColor='purple'
        title='Introduction to MongoDB'
        subTitle='Coursera'
      />
    </div>
    <div>
      <InfoIcon
        icon='certification'
        iconColor='purple'
        title='IntegraTIC 2020'
        subTitle='University of Antioquia'
      />
      <InfoIcon
        icon='certification'
        iconColor='purple'
        title='German Course #6'
        subTitle='University of Antioquia | Multilingua'
      />
    </div>
  </Section>
);

export { Certifications };
