'use client';

import Options from '@/utils/Options';
import {Card} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import MoviePoster from './MoviePoster';
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
        position:'relative'
      }}
    >
      <MoviePoster />
      <MovieText />
      <Options />
    </Card>
  );
};

export default MovieCard;
