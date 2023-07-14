'use client';

import SectionTitle from '@/utils/SectionTitle';
import SwitchTab from '@/utils/SwitchTab';
import {Box, Typography} from '@mui/material';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const TrendingSlider = () => {
  return (
    <Box
      sx={{
        boxShadow: 0,
        padding: '0 0 0 2.5rem',
        display: 'flex',
        marginTop: '2rem',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
      }}
    >
      <SectionTitle section='Trending Now' color='#000' switches={['Today', 'This Week', 'This Month']} />
      <Box
        sx={{
          boxShadow: 0,
          display: 'flex',
          gap: '1rem',
          overflow: 'hidden',
          overflowX: 'auto',
          width: '100%',
        }}
      >
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Box>
    </Box>
  );
};

export default TrendingSlider;
