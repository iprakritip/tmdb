'use client';

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
      <Box
        sx={{
         display:'flex',
         gap:'1rem',
         alignItems:'center'
        }}
      >
        <Typography variant='h6' component='h4'>
          Trending Now
        </Typography>
        <SwitchTab />
      </Box>
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
