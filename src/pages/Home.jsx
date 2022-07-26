import React from 'react';
import { Profile } from 'components/page-sections/Profile';
import { Education } from 'components/page-sections/Education';
import { Projects } from 'components/page-sections/Projects';
import { Skills } from 'components/page-sections/Skills';

const Home = () => (
  <main>
    <div className='flex-container'>
      <Profile />
      <Education />
      <Projects />
      <Skills />
    </div>
  </main>
);

export default Home;
