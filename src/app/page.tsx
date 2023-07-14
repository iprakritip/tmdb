import Banner from '@/components/Banner/Banner';
import Nav from '@/components/Nav/Nav';
import Image from 'next/image';
import LatestTrailers from '@/components/LatestTrailers/LatestTrailers';
import WhatsPopular from '@/components/WhatsPopular/WhatsPopular';
import Trending from '@/components/TrendingSection/Trending';
import Leaderboard from '@/components/Leaderboard/Leaderboard';

export default function Home() {
  return (
    <main>
      <Nav />
      <Banner />
      <Trending />
      <LatestTrailers />
      <WhatsPopular />
      <Leaderboard />
    </main>
  );
}
