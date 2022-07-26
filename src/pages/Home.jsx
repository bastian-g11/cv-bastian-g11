import React from 'react';
import { Section } from 'components/Section';
import { Education } from 'components/page-sections/Education';
import { Projects } from 'components/page-sections/Projects';
import { Skills } from 'components/page-sections/Skills';

const Home = () => (
  <main>
    {/* <h1 className='text-3xl font-extrabold'>CV Starter Code</h1> */}
    <div className='flex flex-col'>
      {/* <span className='text-indigo-500 text-lg'>With Tailwind...</span>
      <span className='text-gray-200'>And react router</span> */}
      <Section title='Projects' background='bg-yellow-200'>
        <h1>test</h1>
      </Section>
      <Education />
      <Projects />
      <Skills />
    </div>
  </main>
);

export default Home;
