import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MovieText = () => {
  return (
    <Box component='div' sx={{p: 2}}>
          <Typography variant='body1' component='p' sx={{ fontWeight:'bold' }}>
            Jujutsu Kaisen
          </Typography>
          <Typography variant='body2' component='p'  sx={{ color: "#B1B1B1" }}>
            Oct 03, 2020
          </Typography>
        </Box>
  )
}

export default MovieText