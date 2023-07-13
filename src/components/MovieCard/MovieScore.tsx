'use client';

import {Typography} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';

const MovieScore = () => {
  return (
    <Box
      sx={{
        height: '2.25rem',
        width: '2.25rem',
        background: '#232727',
        border: 0,
        borderRadius: '50%',
        position: 'absolute',
        bottom: '22%',
        left: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Box
        sx={{
          height: '2rem',
          width: '2rem',
          background: '#232727',
          border: '2px green solid',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='body2'
          component='p'
          sx={{color: '#fff', fontSize: '0.7rem', display: 'flex'}}
        >
          81{' '}
          <Typography
            variant='body2'
            component='p'
            sx={{color: '#fff', fontSize: '0.4rem'}}
          >
            %
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default MovieScore;
