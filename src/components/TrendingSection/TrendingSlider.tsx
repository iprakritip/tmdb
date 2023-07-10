'use client';

import {Box, Typography} from '@mui/material';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const TrendingSlider = () => {
  return (
    <Box sx={{
        boxShadow: 0,
        padding: '1rem',
        overflow: 'hidden',
        overflowX: 'auto',
        width: '100%',
      }}>
        <div>
            <Typography variant='h6' component='h4'>Trending Now</Typography>
        </div>
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
