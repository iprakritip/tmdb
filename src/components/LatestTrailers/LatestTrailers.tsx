'use client';

import {color} from '@/utils/color';
import SectionTitle from '@/utils/SectionTitle';
import SwitchTab from '@/utils/SwitchTab';
import {Box, Typography} from '@mui/material';
import React from 'react';
import TrailerCard from '../TrailerCard/TrailerCard';

const LatestTrailers = () => {
  return (
      <Box
        sx={{
          boxShadow: 0,
          width: '100%',
          backgroundImage:
            "url('https://image.tmdb.org/t/p/w1920_and_h427_multi_faces/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Box
          sx={{
            boxShadow: 0,
            backgroundImage: `linear-gradient(to right,rgba(${color.tmdbDarkBlue},.75) 0%,rgba(${color.tmdbDarkBlue},.75) 100%)`,
            padding: '2rem 0 2rem 2.5rem',
            display:'flex',
            flexDirection:'column',
            gap:'1rem'
          }}
        >
          <SectionTitle section='Latest Trailers' color='#fff' />
          <Box
            sx={{
              boxShadow: 0,
              display: 'flex',
              gap: '1rem',
              overflow: 'hidden',
              overflowX: 'auto',
              // padding: '2rem 0 2rem 2.5rem',
            }}
          >
            <TrailerCard />
            <TrailerCard />
            <TrailerCard />
            <TrailerCard />
            <TrailerCard />
            <TrailerCard />
            <TrailerCard />
            <TrailerCard />
            <TrailerCard />
            <TrailerCard />
          </Box>
        </Box>
      </Box>

  );
};

export default LatestTrailers;
