import Hero from '@/components/Hero';
import Building from '@/components/Building';
import Writing from '@/components/Writing';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-2xl px-6">
        <Hero />
        <Building />
        <Writing />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
