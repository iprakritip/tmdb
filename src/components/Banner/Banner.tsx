'use client';

import Button from '@/utils/Button';
import Input from '@/utils/Input';
import React from 'react';
import {BannerSubText, BannerText, BannerWrapper, SearchBar} from './styles/Banner.styled';

const Banner = () => {
  const implementSearch=()=>{
    //log sth
  }
  return (
    <BannerWrapper>
      <div>
        <BannerText>Welcome.</BannerText>
        <BannerSubText>
          Millions of movies, TV shows and people to discover. Explore now.
        </BannerSubText>
      </div>
      <SearchBar>
        <Input type='text' placeholder='Search...' />
        <Button label='Search' onClick={implementSearch} />
      </SearchBar>
    </BannerWrapper>
  );
};

export default Banner;
