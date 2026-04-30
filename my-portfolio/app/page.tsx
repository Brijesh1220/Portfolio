import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Modules from '@/components/Modules';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import TargetCompanies from '@/components/TargetCompanies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Modules />
        <Skills />
        <Education />
        <TargetCompanies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
