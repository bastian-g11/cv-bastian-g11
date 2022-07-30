import { Section } from 'components/Section';
import { InfoIcon } from 'components/InfoIcon';

const Languages = () => (
  <Section
    title='Languages'
    titleBackground='bg-violet'
    container='horizontal-section justify-center'
  >
    <InfoIcon
      icon='language'
      iconColor='purple'
      title='Spanish'
      subTitle='Native'
    />
    <InfoIcon
      icon='language'
      iconColor='purple'
      title='English'
      subTitle='Advanced (B2)'
    />
    <InfoIcon
      icon='language'
      iconColor='purple'
      title='High School'
      subTitle='Intermediate (B1)'
    />
  </Section>
);

export { Languages };
