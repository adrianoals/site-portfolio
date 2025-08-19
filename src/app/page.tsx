import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Technologies from '../components/sections/Technologies';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Technologies />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
