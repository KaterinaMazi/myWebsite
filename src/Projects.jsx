import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Button } from '@mui/material';

function Projects() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: '3rem', textAlign: 'center' }}>
      <Box sx={{
        maxWidth: '1200px',
        margin: '0 auto', // Center the content
        padding: '0 1rem', // Add padding to create space from page edges
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        {/* Projects Title */}
        <Typography
          variant="h2"
          sx={{
            color: '#f734f7',
            marginBottom: '30px',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignSelf: 'center',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
          }}
        >
          
          {t("projectsTitle")}
        </Typography>

        {/* First Project */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #3e434f, #5b585c)',
            borderRadius: '12px',
            boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.5)',
            padding: '30px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          {/* First Project Content */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px' }}>
            <Box sx={{ flex: 1, textAlign: 'left' }}>
              <Typography
                variant="body1"
                sx={{ color: '#e0e0e0', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' }}
              >
                {t("ourEventDescription")}
              </Typography>
              {/* Backend Section */}
              <Box sx={{ marginTop: '30px' }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#f734f7',
                    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: t("backendSectionTitle"),
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: '#e0e0e0' }}
                  dangerouslySetInnerHTML={{
                    __html: t("backendFeatures"),
                  }}
                />
              </Box>
              {/* Frontend Section */}
              <Box sx={{ marginTop: '30px' }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#f734f7',
                    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: t("frontendSectionTitle"),
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: '#e0e0e0' }}
                  dangerouslySetInnerHTML={{
                    __html: t("frontendFeatures"),
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: '#e0e0e0',
                  marginTop: '30px',
                  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                }}
              >
                {t("adminPanelDescription")}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Button
                variant="a"
                href="https://github.com/KaterinaMazi/OurEvents"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: '#f734f7',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: '100px',
                  padding: "0.6rem 1.8rem",
                  marginBottom: '30px',
                  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.4)",
                  '&:hover': {
                    backgroundColor: '#720b78',
                  },
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ fontSize: '30px', marginRight: '15px' }}>💻</Box>
                {t("viewCode")}
              </Button>
              <Button
                variant="a"
                href="https://our-events.site/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: '#f734f7',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: '100px',
                  padding: '0.6rem 1.8rem',
                  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.4)",
                  '&:hover': {
                    backgroundColor: '#720b78',
                  },
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ fontSize: '30px', marginRight: '15px' }}>🌐</Box>
                {t("viewLiveSite")}
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Second Project Title */}
        <Typography
          variant="h2"
          sx={{
            color: '#f734f7',
            marginBottom: '30px',
            marginTop: '30px',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignSelf: 'center',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
          }}
        >
          
          {t("MorfesZoisTitle")}
        </Typography>

        {/* Second Project */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #3e434f, #5b585c)',
            borderRadius: '12px',
            boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.5)',
            padding: '30px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '20px',
            }}
          >
            <Box sx={{ flex: 1, textAlign: 'left' }}>
              {/* Situation */}
              <Typography
                variant="h5"
                sx={{
                  color: '#f734f7',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                }}
              >
                {t('MorfesZoisSituationTitle')}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#e0e0e0', marginBottom: '20px' }}
              >
                {t('MorfesZoisSituation')}
              </Typography>

              {/* Task */}
              <Typography
                variant="h5"
                sx={{
                  color: '#f734f7',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                }}
              >
                {t('MorfesZoisTaskTitle')}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#e0e0e0', marginBottom: '20px' }}
              >
                {t('MorfesZoisTask')}
              </Typography>

              {/* Action */}
              <Typography
                variant="h5"
                sx={{
                  color: '#f734f7',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                }}
              >
                {t('MorfesZoisActionTitle')}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#e0e0e0', marginBottom: '20px' }}
                dangerouslySetInnerHTML={{
                  __html: t('MorfesZoisAction'),
                }}
              />

              {/* Result */}
              <Typography
                variant="h5"
                sx={{
                  color: '#f734f7',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                }}
              >
                {t('MorfesZoisResultTitle')}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#e0e0e0' }}
              >
                {t('MorfesZoisResult')}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button
                variant="a"
                href="https://morfeszois.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: '#f734f7',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: '100px',
                  padding: '0.6rem 1.8rem',
                  boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.4)',
                  '&:hover': {
                    backgroundColor: '#720b78',
                  },
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ fontSize: '30px', marginRight: '15px' }}>🌐</Box>
                {t('viewLiveSite')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
