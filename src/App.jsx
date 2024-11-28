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
      fontSize: '1rem', // Default size
            '@media (min-width:960px) and (max-width:1200px)': {
              fontSize: '1.4rem', // Font size for tablets or smaller laptops (md/lg)
            },
    },
    body2: {
      color: '#e0e0e0',
      fontSize: '0.9rem', // Default size
            '@media (min-width:960px) and (max-width:1200px)': {
              fontSize: '1.2rem', // Font size for tablets or smaller laptops (md/lg)
            },
},
    h3: {
      fontSize: '1rem', // Default size
      color: "#f734f7", 
      fontWeight: "bold", 
      textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
            '@media (min-width:960px) and (max-width:1200px)': {
              fontSize: '2rem', // Font size for tablets or smaller laptops (md/lg)
            },
            '@media (min-width:1200px)': {
              fontSize: '1.3rem', // Font size for laptops/desktops (lg/xl)
            },
    },
    h2: {
      fontSize: '1rem', // Default size
            '@media (max-width:960px)': {
              fontSize: '2rem', // Font size for laptops/desktops (lg/xl)
            },
            '@media (min-width:960px) and (max-width:1200px)': {
              fontSize: '3rem', // Font size for tablets or smaller laptops (md/lg)
            },
            '@media (min-width:1200px)': {
              fontSize: '2rem', // Font size for laptops/desktops (lg/xl)
            },
    },        
    h1: {
      fontSize: '1rem', // Default size
            '@media (max-width:960px)': {
              fontSize: '2rem', // Font size for laptops/desktops (lg/xl)
            },
            '@media (min-width:960px) and (max-width:1200px)': {
              fontSize: '4rem', // Font size for tablets or smaller laptops (md/lg)
            },
            '@media (min-width:1200px)': {
              fontSize: '3rem', // Font size for laptops/desktops (lg/xl)
            },
    },  
    p: {
      fontSize: '1rem', // Default size
            '@media (min-width:960px) and (max-width:1200px)': {
              fontSize: '1.6rem', // Font size for tablets or smaller laptops (md/lg)
            },
            '@media (min-width:1200px)': {
              fontSize: '1.1rem', // Font size for laptops/desktops (lg/xl)
            },
    }, 
  },  
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'a' },
          style: {
            lineHeight: "1.1",
            fontSize: '1rem', // Default size
            '@media (max-width:960px)': {
              fontSize: '0.8rem', // Font size for laptops/desktops (lg/xl)
            },
            '@media (min-width:960px) and (max-width:1200px)': {
              fontSize: '1.6rem', // Font size for tablets or smaller laptops (md/lg)
            },
            '@media (min-width:1200px)': {
              fontSize: '0.8rem', // Font size for laptops/desktops (lg/xl)
            },
          },
        },
      ],
    },
  },


  },
);

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
