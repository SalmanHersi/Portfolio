import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Showcase /> */}
      <Experience />
      <Footer />
    </div>
  );
}
