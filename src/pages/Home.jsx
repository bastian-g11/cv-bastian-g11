import React from 'react';
import { Profile } from 'components/UI/organisms/Profile';
import { Education } from 'components/UI/organisms/Education';
import { Projects } from 'components/UI/organisms/Projects';
import { Languages } from 'components/UI/organisms/Languages';
import { Certifications } from 'components/UI/organisms/Certifications';
import { Skills } from 'components/UI/organisms/Skills';
import { WorkExperience } from 'components/UI/organisms/WorkExperience';

const Home = () => (
  <main>
    <div>
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
