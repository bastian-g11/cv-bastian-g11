import React from 'react';
import { Section } from 'components/Section';
import { Information } from 'components/Information';

const Home = () => (
  <main>
    {/* <h1 className='text-3xl font-extrabold'>CV Starter Code</h1> */}
    <div className='flex flex-col'>
      {/* <span className='text-indigo-500 text-lg'>With Tailwind...</span>
      <span className='text-gray-200'>And react router</span> */}
      <Section title='Work Experience' background='bg-yellow-200'>
        <h1>test</h1>
      </Section>
      <Section title='Work Experience' titleBackground='bg-fuchsia-700'>
        <Information />
      </Section>
    </div>
  </main>
);

export default Home;
