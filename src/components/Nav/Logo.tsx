import Image from 'next/image';
import React from 'react';

export const Logo = () => {
  return (
    <Image
      src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
      width={150}
      height={50}
      alt='tmdb-logo'
    />
  );
};
export const ResponsiveLogo = () => {
  return (
    <Image
      src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
      width={55}
      height={55}
      alt='tmdb-logo'
    />
  );
};


