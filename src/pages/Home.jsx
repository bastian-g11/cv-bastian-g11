import React from 'react';
import { Profile } from 'components/page-sections/Profile';
import { Education } from 'components/page-sections/Education';
import { Projects } from 'components/page-sections/Projects';
import { Languages } from 'components/page-sections/Languages';
import { Certifications } from 'components/page-sections/Certifications';
import { Skills } from 'components/page-sections/Skills';
import { WorkExperience } from 'components/page-sections/WorkExperience';

const Home = () => (
  <main>
    <div className='flex-container'>
      <Profile />
      <div className='w-full md:flex'>
        <WorkExperience />
        <Education />
      </div>
      <Projects />
      <div className='w-full lg:flex'>
        <Languages />
        <Certifications />
      </div>
      <Skills />
    </div>
  </main>
);

export default Home;
