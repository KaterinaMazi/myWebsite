import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Menu from './Menu';
import Home from './Home';
import AboutMe from './AboutMe';
import TechnicalStack from './TechnicalStack';
import Projects from './Projects';
import Skills from './Skills';
import { Box } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    body1: {
      color: '#e0e0e0',
    },
    h3: {
      color: '#fafafa',
    },
  },
});

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Reduce video speed to 50%
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
          sx={{
            alignItems: 'center',
            minHeight: '100%',
            position: 'relative',
            fontFamily: 'Roboto'
          }}
        >
          {/* Video Background */}
          <Box
            component="video"
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'fill',
              zIndex: -1,
              filter: 'grayscale(80%)',
              // Responsive styles using Material UI breakpoints
              objectPosition: 'center',
              [theme.breakpoints.down('md')]: {
                objectFit: 'fill',
              },
            }}
          >
            <source src="/6266-190550868_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </Box>

          {/* Menu Component */}
          <Menu />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/technicalStack" element={<TechnicalStack />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
