import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <Hero />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
