import Banner from '@/components/Banner/Banner';
import Nav from '@/components/Nav/Nav';
import Page from '@/components/Nav/Nav';

import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Nav />
      <Banner/>
    </main>
  );
}
