'use client';

import {Box, Tab, Tabs, createTheme, ThemeProvider} from '@mui/material';
import {} from '@mui/system';
import React, {useState} from 'react';
import {color} from './../utils/color';

interface SwitchTabProps {
  switches: string[];
}

const SwitchTab = ({switches}: SwitchTabProps) => {
  const [value, setValue] = useState(switches[0]);
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  // console.log(value);

  const theme = createTheme({
    palette: {
      primary: {
        main: `rgb(${color.tmdbLightGreen})`,
      },
      secondary: {
        main: `rgb(${color.tmdbDarkBlue})`,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          border: `1px solid rgb(${color.tmdbDarkBlue}) `,
          borderRadius: '30px',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{style: {display: 'none'}}}
          sx={{
            padding: 0,
            minWidth: 0,
            minHeight: 0,
          }}
        >
          {switches.map((switchName, index) => {
            return (
              <Tab
                key={index}
                disableRipple
                value={switchName}
                label={switchName}
                sx={{
                  textTransform: 'lowercase',
                  padding: ' 0.4rem 1rem',
                  minWidth: 0,
                  border: 0,
                  borderRadius: '30px',
                  minHeight: 0,
                  '&.Mui-selected': {
                    background: `rgb(${color.tmdbDarkBlue})`,
                  },
                }}
              />
            );
          })}
          {/* <Tab
            disableRipple
            value='today'
            label='Today'
            sx={{
              textTransform: 'lowercase',
              padding: ' 0.4rem 1rem',
              minWidth: 0,
              border: 0,
              borderRadius: '30px',
              minHeight: 0,
              '&.Mui-selected': {
                background: `rgb(${color.tmdbDarkBlue})`,
              },
            }}
          />
          <Tab
            disableRipple
            value='thisWeek'
            label='This Week'
            sx={{
              textTransform: 'lowercase',
              '&.Mui-selected': {
                background: `rgb(${color.tmdbDarkBlue})`,
              },
              padding: ' 0.4rem 1rem',
              minWidth: 0,
              border: 0,
              borderRadius: '30px',
              minHeight: 0,
              //   color: `rgb(${color.tmdbDarkBlue})`,
            }}
          />
          <Tab
            disableRipple
            value='thisMonth'
            label='This Month'
            sx={{
              textTransform: 'lowercase',
              '&.Mui-selected': {
                background: `rgb(${color.tmdbDarkBlue})`,
              },
              padding: ' 0.4rem 1rem',
              minWidth: 0,
              border: 0,
              borderRadius: '30px',
              minHeight: 0,
              //   color: `rgb(${color.tmdbDarkBlue})`,
            }}
          /> */}
        </Tabs>
      </Box>
    </ThemeProvider>
  );
};

export default SwitchTab;
