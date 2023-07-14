'use client';

import {color} from '@/utils/color';
import SectionTitle from '@/utils/SectionTitle';
import {GifBoxOutlined} from '@mui/icons-material';
import {Box, Container, Typography} from '@mui/material';
import React from 'react';
import Basis from './Basis';

const Leaderboard = () => {
  const green = `rgb(${color.tmdbLightGreen})`;
  const red = `rgb(${color.tmdbLogoRed})`;
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
      <Box sx={{display: 'flex', flexDirection:'column'}}>
        <Box sx={{display: 'flex', gap:'2rem'}}>
          <SectionTitle section='Leaderboard' color='#000' />
          <Box>
            <Basis name='All Time Edits' color={green} />
            <Basis name='Edits This Week' color={red} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Leaderboard;
