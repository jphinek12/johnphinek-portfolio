import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Contact from '../components/Contact';

function Home() {
  return (
    <main>
      <Hero />
      <WorkExperience />
      <About />
      <Contact />
    </main>
  );
}

export default Home;
