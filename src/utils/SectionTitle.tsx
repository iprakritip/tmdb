'use client';

import {Box, Typography} from '@mui/material';
import React from 'react';
import SwitchTab from './SwitchTab';

interface SectionTitleProps{
    section:string,
    color:string
}

const SectionTitle = ({section, color}:SectionTitleProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
      }}
    >
      <Typography variant='h6' component='h4' sx={{color:color}}>
        {section}
      </Typography>
      <SwitchTab />
    </Box>
  );
};

export default SectionTitle;
