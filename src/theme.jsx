// Create a custom theme in a file like src/theme.js or src/theme.ts
"use client"
import { createTheme } from '@mui/material/styles';
import { Roboto } from '@fontsource/roboto';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
