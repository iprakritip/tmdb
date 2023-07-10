import Banner from '@/components/Banner/Banner';
import Nav from '@/components/Nav/Nav';
import Page from '@/components/Nav/Nav';


import Image from 'next/image';
import TrendingSlider from '@/components/TrendingSection/TrendingSlider';

export default function Home() {
  return (
    <main>
      <Nav />
      <Banner />
      {/* <SwitchBtn /> */}
      <TrendingSlider />
    </main>
  );
}
