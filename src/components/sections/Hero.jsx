import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { FadeIn } from '../common/Components';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        pt: 22.5, // 180px
        pb: 15,   // 120px
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(49, 130, 206, 0.1) 0%, rgba(26, 54, 93, 0.05) 100%)',
          top: '-200px',
          right: '-200px',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(49, 130, 206, 0.08) 0%, rgba(26, 54, 93, 0.04) 100%)',
          bottom: '-100px',
          left: '-100px',
        },
      }}
    >
      <Container maxWidth="lg">
        <FadeIn>
          <Box sx={{ maxWidth: '700px', position: 'relative', zIndex: 2 }}>
            <Typography variant="h5" sx={{ 
              fontSize: '1.8rem', 
              color: 'action.active', 
              mb: 2, 
              fontWeight: 600,
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Data Management & Amazon FBA Specialist
            </Typography>
            
            <Typography variant="h1" sx={{ 
              fontSize: { xs: '2.8rem', md: '3.8rem' }, 
              mb: 2.5, 
              lineHeight: 1.1 
            }}>
              Transforming Data Into Business Growth
            </Typography>
            
            <Typography variant="body1" sx={{ 
              fontSize: '1.3rem', 
              mb: 5, 
              color: 'text.primary', 
              opacity: 0.9,
              maxWidth: '600px'
            }}>
              Delivering precise data solutions and optimized Amazon FBA strategies to drive accuracy, reliability, and measurable business growth for corporate clients and e-commerce sellers.
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2.5 }}>
              <Button href="#contact" variant="contained" color="primary">
                Hire Me
              </Button>
              <Button href="#services" variant="outlined" color="primary">
                View Portfolio
              </Button>
            </Box>
          </Box>
        </FadeIn>
      </Container>
    </Box>
  );
};

export default Hero;
