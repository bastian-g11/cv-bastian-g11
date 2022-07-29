import React from 'react';
import { Profile } from 'components/page-sections/Profile';
import { Education } from 'components/page-sections/Education';
import { Projects } from 'components/page-sections/Projects';
import { Skills } from 'components/page-sections/Skills';
import { WorkExperience } from 'components/page-sections/WorkExperience';

const Home = () => (
  <main>
    <div className='flex-container'>
      <Profile />
      <div className='w-full md:flex'>
        <Education />
        <WorkExperience />
      </div>
      <Projects />
      <Skills />
    </div>
  </main>
);

export default Home;
