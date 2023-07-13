'use client';

import Options from '@/utils/Options';
import {Card} from '@mui/material';
import React from 'react';
import PlayIcon from './PlayIcon';
import TrailerPoster from './TrailerPoster';
import TrailerText from './TrailerText';

const TrailerCard = () => {
  return (
    <Card
      sx={{
        minWidth: '19rem',
        width: '19rem',
        height: '17rem',
        fontFamily: 'Roboto',
        border: 0,
        borderRadius: '10',
        boxShadow: 0,
        display: 'flex',
        flexDirection: 'column',
        background: 'rgb(225, 225, 225, 0)',
        position: 'relative',
      }}
    >
      <TrailerPoster />
      <TrailerText />
      <PlayIcon />
      <Options />
    </Card>
  );
};

export default TrailerCard;
