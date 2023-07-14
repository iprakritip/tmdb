import {Box, Typography} from '@mui/material';
import React from 'react';

interface BasisProps {
  name: string;
  color: string;
}

const Basis = ({name, color}: BasisProps) => {
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'0.5rem'}}>
      <Box
        sx={{
          height: '0.5rem',
          width: '0.5rem',
          border: 0,
          borderRadius: '50%',
          background: color,
        }}
      ></Box>
      <Typography variant='body2' component='p'>
        All Time Edits
      </Typography>
    </Box>
  );
};

export default Basis;
