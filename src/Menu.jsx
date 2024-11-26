import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { AppBar, Box, Button, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Menu() {
  const { t, i18n } = useTranslation();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation(); // Get the current path
  const isMobile = useMediaQuery('(max-width:1000px)'); // Check if screen size is mobile

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { path: '/', label: t('menuHome') },
    { path: '/technicalStack', label: t('menuTechnicalStack') },
    { path: '/projects', label: t('menuProjects') },
    { path: '/skills', label: t('menuSkills') },
  ];

  return (
    <>
      {/* AppBar for Desktop */}
      {!isMobile && (
        <AppBar position="sticky" sx={{ backgroundColor: '#282c34', boxShadow: 'none' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Logo or Title */}


            {/* Desktop Menu Links */}
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              {menuItems.map((item) => (
                <Link to={item.path} key={item.path} style={{ textDecoration: 'none' }}>
                  <Button sx={{ color: '#fff', fontSize: '1rem', textTransform: 'capitalize', '&:hover': { color: '#f734f7' } }}>
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* Language Selection */}
            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
              {['EN', 'GR'].map((lang) => (
                <Button
                  key={lang}
                  onClick={() => handleLanguageChange(lang.toLowerCase())}
                  sx={{
                    backgroundColor: '#403e3e',
                    color: 'white',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    minWidth: '40px',
                    '&:hover': {
                      backgroundColor: '#f734f7',
                      color: '#fff',
                    },
                  }}
                >
                  {lang}
                </Button>
              ))}
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              {[{
                href: 'https://www.linkedin.com/in/katerina-mazi/', icon: <FaLinkedin size="1.5em" />
              }, {
                href: 'https://github.com/KaterinaMazi', icon: <FaGithub size="1.5em" />
              }, {
                href: 'mailto:katerinaaliki1989@gmail.com', icon: <FaEnvelope size="1.5em" />
              }].map((item) => (
                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                  <Box
                    sx={{
                      transition: 'transform 0.3s ease, color 0.3s ease',
                      '&:hover': {
                        color: '#f734f7',
                        transform: 'scale(1.2)',
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                </a>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      )}

      {/* AppBar for Mobile */}
      {isMobile && (
        <AppBar position="sticky" sx={{ backgroundColor: '#282c34', boxShadow: 'none' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Current Path */}
            <Typography variant="h5" sx={{ color: '#fff' }}>
              {menuItems.find((item) => item.path === location.pathname)?.label || t('Μenu')}
            </Typography>

            {/* Mobile Menu Icon */}
            <IconButton onClick={toggleDrawer(true)} sx={{ color: '#fff' }}>
              <MenuIcon fontSize='large'/>
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      {/* Drawer (Mobile) */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#282c34',
            color: '#fff',
            width: '250px',
            height: '100%',
            padding: '1rem',
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: '#fff', alignSelf: 'flex-end' }}>
            <CloseIcon fontSize='large'/>
          </IconButton>

          {/* Menu Items */}
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton component={Link} to={item.path} onClick={toggleDrawer(false)}>
                  <Typography variant='h5' sx={{'&:hover': { color: '#f734f7' } }}>{item.label}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Language Selection */}
          <Box sx={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
            {['EN', 'GR'].map((lang) => (
              <Button
                key={lang}
                onClick={() => handleLanguageChange(lang.toLowerCase())}
                sx={{
                  backgroundColor: '#403e3e',
                  color: 'white',
                  textTransform: 'uppercase',
                  '&:hover': {
                    backgroundColor: '#f734f7',
                    color: '#fff',
                  },
                }}
              >
                <Typography variant='h5'>{lang}</Typography>
              </Button>
            ))}
          </Box>

          {/* Social Icons */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '1rem', marginTop: '2rem' }}>
            {[{
              href: 'https://www.linkedin.com/in/katerina-mazi/', icon: <FaLinkedin size="1.5em" />
            }, {
              href: 'https://github.com/KaterinaMazi', icon: <FaGithub size="1.5em" />
            }, {
              href: 'mailto:katerinaaliki1989@gmail.com', icon: <FaEnvelope size="1.5em" />
            }].map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                <Box
                  sx={{
                    transition: 'transform 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      color: '#f734f7',
                      transform: 'scale(1.2)',
                    },
                  }}
                >
                  <Typography variant='h5'>{item.icon}</Typography>
                </Box>
              </a>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Menu;
