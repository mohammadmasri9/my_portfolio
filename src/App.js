import './App.css';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './LandingPage';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#5b3df6', // Matches the purple color in your landing page
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
