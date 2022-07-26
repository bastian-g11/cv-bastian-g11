import { Section } from 'components/Section';
import { Project } from 'components/Project';

const Projects = () => (
  <Section title='Educational History' background='bg-light-yellow'>
    <Project
      icon='diamond'
      iconColor='purple'
      title='ToDo List App'
      description='Todo List App made using Node.js, Express,
      EJS and MongoDB. This App was made in order to learn about Server Side Rendering (SSR)
      using EJS and Mongo DB.'
      link='https://lit-tor-42062.herokuapp.com/'
    />

    <Project
      icon='diamond'
      iconColor='violet'
      title='Newsletter SignUp Page'
      description='Newsletter sign up page made using Node.js,
      Express and MailChimp in order to store the users that wanted to subscribe to the newsletter'
      link='https://arcane-inlet-95341.herokuapp.com/'
    />

    <Project
      icon='diamond'
      iconColor='violet'
      title='Immersive Stories'
      description='Every person is a world and has something to share. The objective of this project was to use
      Virtual Reality to share the untold stories of the citizens of Medellín.'
      link='https://tinyurl.com/57p97kh7 | https://tinyurl.com/5n7ca8a5'
    />
  </Section>
);

export { Projects };
