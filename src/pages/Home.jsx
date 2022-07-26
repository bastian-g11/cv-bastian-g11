import React from 'react';
import { Section } from 'components/Section';
import { Education } from 'components/page-sections/Education';
import { Projects } from 'components/page-sections/Projects';
import { Skills } from 'components/page-sections/Skills';

const Home = () => (
  <main>
    <div className='flex flex-col'>
      <Section title='Projects' background='bg-light-yellow'>
        <h1>test</h1>
      </Section>
      <Education />
      <Projects />
      <Skills />
    </div>
  </main>
);

export default Home;
