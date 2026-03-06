import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { FadeIn, SectionTitle } from '../common/Components';
import {
  ShoppingCart as ShoppingCartIcon,
  Checklist as ChecklistIcon,
  Dashboard as DashboardIcon,
  Web as WebIcon
} from '@mui/icons-material';

const highlights = [
  {
    icon: <ShoppingCartIcon sx={{ fontSize: '2.2rem' }} />,
    title: 'Ecommerce Website',
    desc: 'A full-featured ecommerce platform with product search, cart functionality, and responsive design.'
  },
  {
    icon: <ChecklistIcon sx={{ fontSize: '2.2rem' }} />,
    title: 'Todo App',
    desc: 'Functional task management application with a clean UI, local storage, and real-time updates.'
  },
  {
    icon: <DashboardIcon sx={{ fontSize: '2.2rem' }} />,
    title: 'Taskify Dashboard',
    desc: 'Interactive productivity dashboard integrated with Firebase for secure data handling and analytics.'
  },
  {
    icon: <WebIcon sx={{ fontSize: '2.2rem' }} />,
    title: 'Portfolio Website',
    desc: 'A modern, high-performance professional portfolio showcasing my technical skills and creative work.'
  }
];

const Experience = () => {
  return (
    <Box id="experience" component="section" sx={{ py: 12.5 }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Explore some of my latest work, demonstrating my technical proficiency and problem-solving skills." 
          />
        </FadeIn>

        <Grid container spacing={4}>
          {highlights.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FadeIn delay={index * 0.1}>
                <Paper
                  elevation={0}
                  sx={{
                    p: '35px 30px',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
                    borderTop: '5px solid',
                    borderColor: 'action.active',
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  <Box sx={{ color: 'action.active', mb: 2.5 }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: '1.3rem', mb: 2, fontWeight: 800 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Paper>
              </FadeIn>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
