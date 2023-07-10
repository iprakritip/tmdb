'use client';

import {CardMedia, Box} from '@mui/material';
import React from 'react';
import PlayIcon from './PlayIcon';

const TrailerPoster = () => {
  return (
    <Box sx={{position: 'relative',}}>
      <CardMedia
        sx={{
          height: 180,
          border: 0,
          borderRadius: '0.25rem',
          objectFit: 'contain',
          
        }}
        image='https://image.tmdb.org/t/p/w355_and_h200_multi_faces/628Dep6AxEtDxjZoGP78TsOxYbK.jpg'
        title='poster'
      />
      {/* <PlayIcon/> */}
    </Box>
  );
};

export default TrailerPoster;
