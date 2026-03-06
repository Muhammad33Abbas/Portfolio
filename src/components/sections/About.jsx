import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { FadeIn, SectionTitle } from '../common/Components';

const About = () => {
  return (
    <Box id="about" component="section" sx={{ py: 12.5 }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionTitle 
            title="About Me" 
            subtitle="I am a passionate Computer Science student and Frontend Developer dedicated to building functional and beautiful web applications." 
          />
        </FadeIn>

        <Grid container spacing={7.5} alignItems="center">
          <Grid item xs={12} md={6}>
            <FadeIn delay={0.2}>
              <Box sx={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                position: 'relative',
                height: { xs: '300px', md: '500px' }, // Explicit height
                width: '100%',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, rgba(26, 54, 93, 0.2), rgba(49, 130, 206, 0.2))',
                  zIndex: 1,
                  top: 0,
                  left: 0,
                }
              }}>
                {/* Placeholder logic from original HTML */}
                <Box sx={{ 
                  width: '100%', 
                  height: '100%', 
                  background: 'linear-gradient(135deg, #1a365d, #2d3748)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  backgroundImage: 'url(/Images/Abbas.png)'
                  // If using an image later:
                  // backgroundImage: 'url(...)',
                  // backgroundSize: 'cover',
                  // backgroundPosition: 'center',
                }} />
              </Box>
            </FadeIn>
          </Grid>

          <Grid item xs={12} md={6}>
            <FadeIn delay={0.4}>
              <Box>
                <Typography variant="h3" sx={{ fontSize: '2.2rem', mb: 3 }}>
                  Professional Summary
                </Typography>
                
                <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 2.5 }}>
                  To learn something more in practice and to obtain an entry level position in organization with high moral attitude and with great moto to implement my ability and skills in fartile environment and to bring a prospective shine in my approach.
                </Typography>
                
                <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 2.5 }}>
                  I focus on creating clean, efficient code and user-friendly interfaces. My technical journey involves exploring modern web technologies and applying them to solve real-world problems.
                </Typography>
                
                <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 2.5 }}>
                  I am constantly learning and adapting to new frameworks and libraries, ensuring that my development skills remain sharp and up-to-date with industry standards.
                </Typography>
              </Box>
            </FadeIn>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
