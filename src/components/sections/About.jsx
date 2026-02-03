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
            subtitle="Professional data specialist with extensive experience in computer operations, data management, and Amazon FBA business development" 
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
                  I am a results-driven professional with over 8 years of experience in computer operations and data management, combined with specialized expertise in Amazon FBA, Wholesale, and Private Label business models.
                </Typography>
                
                <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 2.5 }}>
                  My work is characterized by meticulous attention to detail, strong analytical capabilities, and a commitment to optimizing processes for maximum efficiency and quality. I excel at transforming complex data into actionable business insights.
                </Typography>
                
                <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 2.5 }}>
                  My approach combines technical proficiency with strategic business thinking, ensuring that every project I undertake not only meets but exceeds expectations. I'm passionate about helping businesses streamline operations, improve data accuracy, and accelerate growth through optimized e-commerce strategies.
                </Typography>
                
                <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                  I stay current with industry trends and continuously seek opportunities for professional development, including my NEBOSH safety certification which underscores my commitment to workplace safety and compliance.
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
