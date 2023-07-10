import {color} from '@/utils/color';
import {Typography} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';

const MovieText = () => {
  return (
    <Box component='div' sx={{p: 2}}>
      <Typography
        variant='body1'
        component='h4'
        sx={{
          fontWeight: 'bold',
          cursor: 'pointer',
          '&:hover': {
            color: `rgb(${color.tmdbLightBlue})`,
          },
        }}
      >
        Jujutsu Kaisen
      </Typography>
      <Typography variant='body2' component='p' sx={{color: '#B1B1B1'}}>
        Oct 03, 2020
      </Typography>
    </Box>
  );
};

export default MovieText;
