import { Section } from 'components/UI/molecules/Section';
import { Project } from 'components/UI/molecules/Project';

const Projects = () => (
  <Section title='Projects' background='bg-light-yellow'>
    <Project
      icon='todo'
      iconColor='violet'
      title='ToDo List App'
      description='Todo List App made using Node.js, Express,
      EJS and MongoDB. This App was made in order to learn about Server Side Rendering (SSR)
      using EJS and Mongo DB.'
      link='https://lit-tor-42062.herokuapp.com/'
    />
    <Project
      icon='paperPlane'
      iconColor='violet'
      title='Newsletter SignUp Page'
      description='Newsletter sign up page made using Node.js,
       Express and MailChimp in order to store the users that wanted to subscribe to the newsletter'
      link='https://arcane-inlet-95341.herokuapp.com/'
      alignStart={false}
    />

    <Project
      icon='cardboard'
      iconColor='violet'
      title='Immersive Stories'
      description='Every person is a world and has something to share. The objective of this project was to use
       Virtual Reality to share the untold stories of the citizens of Medellín.'
      link='https://tinyurl.com/57p97kh7'
      link2='https://tinyurl.com/5n7ca8a5'
    />
  </Section>
);

export { Projects };
