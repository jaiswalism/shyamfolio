
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
