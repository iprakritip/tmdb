import {CardMedia} from '@mui/material';
import React from 'react';

const MoviePoster = () => {
  return (
    <CardMedia
      sx={{height: 230, border: 0, borderRadius: '0.25rem',objectFit:'contain'}}
      image='https://image.tmdb.org/t/p/w220_and_h330_face/3yFHMtdhriig4sm1w8oMQfA2gFN.jpg'
      title='poster'
    />
  );
};

export default MoviePoster;
