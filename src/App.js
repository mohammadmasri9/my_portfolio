import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './LandingPage';
import Portfolio from './Portfolio'; // Fixed import
import ContactMe from './ContactMe';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5b3df6',
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
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route path="/contact" element={<ContactMe/>} />

          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
