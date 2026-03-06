import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { FadeIn, SectionTitle } from '../common/Components';
import { 
  Code as CodeIcon,
  Devices as DevicesIcon,
  Storage as StorageIcon,
  Layers as LayersIcon,
  Speed as SpeedIcon,
  GitHub as GitHubIcon
} from '@mui/icons-material';

const services = [
  {
    icon: <CodeIcon sx={{ fontSize: '1.8rem' }} />,
    title: 'Frontend Development',
    desc: 'Building responsive and interactive user interfaces using React.js and modern JavaScript (ES6+).'
  },
  {
    icon: <DevicesIcon sx={{ fontSize: '1.8rem' }} />,
    title: 'Web Design',
    desc: 'Creating visually stunning and user-friendly designs with Material UI (MUI) and custom CSS.'
  },
  {
    icon: <LayersIcon sx={{ fontSize: '1.8rem' }} />,
    title: 'State Management',
    desc: 'Implementing efficient data flow and state management using Context API and React Hook Form.'
  },
  {
    icon: <StorageIcon sx={{ fontSize: '1.8rem' }} />,
    title: 'Backend Integration',
    desc: 'Powering applications with Node.js, Express, and Firebase for real-time data and authentication.'
  },
  {
    icon: <SpeedIcon sx={{ fontSize: '1.8rem' }} />,
    title: 'Performance Optimization',
    desc: 'Ensuring fast load times and smooth performance through clean code and efficient asset handling.'
  },
  {
    icon: <GitHubIcon sx={{ fontSize: '1.8rem' }} />,
    title: 'Version Control',
    desc: 'Managing project workflows and collaborations using Git and GitHub for organized development.'
  }
];

const Services = () => {
  return (
    <Box id="services" component="section" sx={{ py: 12.5 }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionTitle 
            title="My Expertise" 
            subtitle="I offer a wide range of web development services to help you build modern and scalable applications." 
          />
        </FadeIn>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FadeIn delay={index * 0.1}>
                <Paper
                  elevation={0}
                  sx={{
                    p: '40px 30px',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
                    textAlign: 'center',
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                    }
                  }}
                >
                  <Box sx={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #3182ce, #1a365d)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    color: 'white'
                  }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: '1.5rem', mb: 2, fontWeight: 800 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.desc}
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

export default Services;
