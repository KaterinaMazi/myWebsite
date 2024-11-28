import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function TechnicalStack() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        flexWrap: 'wrap',
        gap: '100px', // Consistent gap between cards
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Backend Card */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #3e434f, #5b585c)',
          borderRadius: '12px',
          boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)',
          padding: '40px',
          width: { xs: '100%', sm: '45%', md: '70%', lg:'30%' },
          textAlign: 'center',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#f734f7',
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
          }}
        >
          {t('backendTitle')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            margin: '10px 0',
          }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python Logo"
            style={{ width: '70px', height: '70px' }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
            alt="MySQL Logo"
            style={{ width: '70px', height: '70px' }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
            alt="Django Logo"
            style={{ width: '70px', height: '70px' }}
          />
        </Box>
        <Typography variant="body1" sx={{ color: '#e5e7eb' }}>
          {t('backendDescription')}
        </Typography>
      </Box>

      {/* Frontend Card */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #3e434f, #5b585c)',
          borderRadius: '12px',
          boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)',
          padding: '40px',
          width: { xs: '100%', sm: '45%', md: '70%', lg:'30%' },
          textAlign: 'center',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#f734f7',
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
          }}
        >
          {t('frontendTitle')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            margin: '10px 0',
          }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript Logo"
            style={{ width: '70px', height: '70px' }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML Logo"
            style={{ width: '70px', height: '70px' }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS Logo"
            style={{ width: '70px', height: '70px' }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React Logo"
            style={{ width: '70px', height: '70px' }}
          />
        </Box>
        <Typography variant="body1" sx={{ color: '#e5e7eb' }}>
          {t('frontendDescription')}
        </Typography>
      </Box>

      {/* Tools Card */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #3e434f, #5b585c)',
          borderRadius: '12px',
          boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)',
          padding: '40px',
          width: { xs: '100%', sm: '45%', md: '70%', lg:'30%' },
          textAlign: 'center',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#f734f7',
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
          }}
        >
          {t('toolsTitle')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            margin: '10px 0',
          }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git Logo"
            style={{ width: '70px', height: '70px' }}
          />
          <img
            src="https://img.icons8.com/ios-glyphs/50/ffffff/github.png"
            alt="GitHub Logo"
            style={{ width: '70px', height: '70px' }}
          />
        </Box>
        <Typography variant="body1" sx={{ color: '#e5e7eb' }}>
          {t('toolsDescription')}
        </Typography>
      </Box>
    </Box>
  );
}

export default TechnicalStack;
