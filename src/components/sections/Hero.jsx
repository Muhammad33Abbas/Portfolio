import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { FadeIn } from '../common/Components';
// import HeroImage from '../../assets/hero_image.png';
import SendIcon from '@mui/icons-material/Send';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    float: {
      y: [0, -20, 0],
      rotate: [0, 1, 0, -1, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box
      id="home"
      sx={{
        pt: { xs: 15, md: 20 },
        pb: { xs: 10, md: 15 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f8faff 0%, #eef2f6 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(49, 130, 206, 0.05) 0%, rgba(255,255,255,0) 70%)',
          top: '-300px',
          right: '-200px',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 178, 172, 0.05) 0%, rgba(255,255,255,0) 70%)',
          bottom: '-100px',
          left: '-200px',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={7}>
            <FadeIn>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography 
                  variant="h6" 
                  component={motion.h6}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  sx={{ 
                    fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)', 
                    color: '#3182ce', 
                    fontWeight: 600, 
                    mb: 2, 
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    gap: 1.5,
                    opacity: 0.9,
                    maxWidth: '100%',
                    wordBreak: 'break-word'
                  }}
                >
                  <Box component="span" sx={{ width: { xs: '30px', md: '40px' }, height: '2px', bgcolor: '#3182ce' }} />
                  Data Management & Amazon FBA
                </Typography>

                <Typography 
                  variant="h1" 
                  sx={{ 
                    // Reduced size for a more refined look
                    fontSize: 'clamp(2rem, 4vw + 0.5rem, 3.2rem)', 
                    fontWeight: { xs: 700, md: 700 }, // Reduced weight from 800
                    lineHeight: { xs: 1.2, md: 1.1 },
                    mb: 3,
                    // Theme-based gradient
                    background: 'linear-gradient(135deg, #1a365d 0%, #3182ce 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0px 2px 10px rgba(26, 54, 93, 0.1)',
                    letterSpacing: '-0.02em',
                    textAlign: { xs: 'center', md: 'left' },
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
                  Transforming Data <br/>
                  <Box component="span" sx={{ color: '#3182ce', WebkitTextFillColor: '#3182ce' }}>
                     Into Growth
                  </Box>
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)', 
                    color: 'text.secondary', 
                    mb: { xs: 4, md: 5 }, 
                    maxWidth: { xs: '100%', sm: '90%', md: '550px' },
                    mx: { xs: 'auto', md: 0 },
                    lineHeight: 1.7,
                    textAlign: { xs: 'center', md: 'left' },
                    fontWeight: 400
                  }}
                >
                  I specialize in precise data management and optimized Amazon FBA strategies that drive accuracy, efficiency, and measurable business success.
                </Typography>
                
                <Box 
                  sx={{ 
                    display: 'flex', 
                    gap: 2.5, 
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    flexWrap: 'wrap'
                  }}
                >
                  <Button 
                    variant="contained" 
                    size="large"
                    href="#contact"
                    endIcon={<SendIcon />}
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      borderRadius: '50px',
                      background: 'linear-gradient(90deg, #3182ce 0%, #2c5282 100%)',
                      boxShadow: '0 10px 20px -10px rgba(49, 130, 206, 0.5)',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 15px 25px -10px rgba(49, 130, 206, 0.6)',
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Hire Me
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    href="#services"
                    startIcon={<WorkOutlineIcon />}
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      borderRadius: '50px',
                      borderWidth: '2px',
                      borderColor: '#3182ce',
                      color: '#3182ce',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      '&:hover': {
                        borderWidth: '2px',
                        borderColor: '#2c5282',
                        bgcolor: 'rgba(49, 130, 206, 0.05)',
                        transform: 'translateY(-3px)',
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    My Services
                  </Button>
                </Box>
              </Box>
            </FadeIn>
          </Grid>

          {/* Image Content */}
          <Grid item xs={12} md={5}>
            <Box
              component={motion.div}
              variants={imageVariants}
              initial="hidden"
              animate={["visible", "float"]}
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '80%',
                  height: '20px',
                  background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 70%)',
                  bottom: '-20px',
                  borderRadius: '50%',
                  filter: 'blur(5px)',
                  transform: 'scaleX(0.8)',
                  animation: 'shadowPulse 5s ease-in-out infinite'
                }
              }}
            >
              <Box 
                component="img"
                src="/Images/Abbas.png"
                alt="Data Management Illustration"
                sx={{
                  width: '100%',
                  maxWidth: { xs: '350px', md: '500px' },
                  height: 'auto',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))',
                  objectFit: 'contain'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <style jsx global>{`
        @keyframes shadowPulse {
          0%, 100% { transform: scaleX(0.8); opacity: 0.5; }
          50% { transform: scaleX(1); opacity: 0.3; }
        }
      `}</style>
    </Box>
  );
};

export default Hero;
