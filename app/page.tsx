import Collection from '@/components/Collection/Collection';
import Hero from '@/components/Hero/Hero';
import Choose from './components/Choose/Choose';
import Works from './components/Works/Works';

export default function Home() {
  return (
    <>
      <Hero />
      <Collection />
      <Choose />
      <Works />
    </>
  );
}
