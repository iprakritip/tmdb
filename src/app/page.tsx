import Banner from '@/components/Banner/Banner';
import Nav from '@/components/Nav/Nav';
import Image from 'next/image';
import TrendingSlider from '@/components/TrendingSection/TrendingSlider';
import LatestTrailers from '@/components/LatestTrailers/LatestTrailers';

export default function Home() {
  return (
    <main>
      <Nav />
      <Banner />
      <TrendingSlider />
      <LatestTrailers/>
    </main>
  );
}
