import { Section } from 'components/Section';
import { ListItem } from 'components/ListItem';

const Languages = () => (
  <Section
    title='Languages'
    titleBackground='bg-violet'
    container='horizontal-container justify-center'
  >
    <ListItem
      icon='language'
      iconColor='purple'
      title='Spanish'
      subTitle='Native'
    />
    <ListItem
      icon='language'
      iconColor='purple'
      title='English'
      subTitle='Advanced (B2)'
    />

    <ListItem
      icon='language'
      iconColor='purple'
      title='High School'
      subTitle='Intermediate (B1)'
    />
  </Section>
);

export { Languages };
