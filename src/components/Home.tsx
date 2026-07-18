import Hero from './Hero';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Services from './Services';
import Blogs from './Blogs';
import Contact from './Contact';
import ContactT from "@/src/components/ContactT.tsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Services />
      <Blogs />
      {/*<Contact />*/}
      <ContactT/>
    </>
  );
}
