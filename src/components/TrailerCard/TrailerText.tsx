'use client';

import {Typography} from '@mui/material';
import {Box, color} from '@mui/system';
import React from 'react';

const TrailerText = () => {
  return (
    <Box component='div' sx={{p: 2,}}>
      <Typography
        variant='body1'
        component='h4'
        sx={{
          fontWeight: 400,
          cursor: 'pointer',
          color: '#fff',
          textAlign: 'center',
          lineHeight:'1.5rem'
        }}
      >
        Mission: Impossible - Dead Reckoning Part One
      </Typography>
      <Typography
        variant='body2'
        component='p'
        sx={{color: '#fff', textAlign: 'center', fontWeight:'100'}}
      >
        Get ready to go rogue
      </Typography>
    </Box>
  );
};

export default TrailerText;
