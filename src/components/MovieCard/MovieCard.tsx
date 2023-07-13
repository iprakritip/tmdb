'use client';

import Options from '@/utils/Options';
import {Card} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import MoviePoster from './MoviePoster';
import MovieScore from './MovieScore';
import MovieText from './MovieText';

const MovieCard = () => {
  return (
    <Card
      sx={{
        minWidth: '9rem',
        height: '20rem',
        padding: 0,
        fontFamily: 'Roboto',
        border: 0,
        borderRadius: 0,
        boxShadow: 0,
        position: 'relative',
        display:'flex',
        flexDirection:'column',
        gap:'0.5rem'
      }}
    >
      <MoviePoster />
      <MovieText />
      <Options />
      <MovieScore />
    </Card>
  );
};

export default MovieCard;
