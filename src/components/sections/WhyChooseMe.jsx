import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { FadeIn, SectionTitle } from '../common/Components';
import { 
  Code as CodeIcon, 
  Psychology as UserIcon, 
  Terminal as TerminalIcon, 
  Groups as GroupsIcon 
} from '@mui/icons-material';

const reasons = [
  {
    icon: <CodeIcon sx={{ fontSize: '1.5rem' }} />,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable, and well-documented code following latest standards.'
  },
  {
    icon: <UserIcon sx={{ fontSize: '1.5rem' }} />,
    title: 'User-Centric',
    desc: 'Designing interfaces and workflows with a deep focus on user experience and accessibility.'
  },
  {
    icon: <TerminalIcon sx={{ fontSize: '1.5rem' }} />,
    title: 'Modern Stack',
    desc: 'Leveraging modern frameworks and tools like React, Node.js, and Firebase for high performance.'
  },
  {
    icon: <GroupsIcon sx={{ fontSize: '1.5rem' }} />,
    title: 'Team Player',
    desc: 'Excellent communicator with a collaborative mindset for seamless project delivery.'
  }
];

const WhyChooseMe = () => {
  return (
    <Box id="why" component="section" sx={{ py: 12.5, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionTitle 
            title="Why Choose Me" 
            subtitle="Key differentiators that set my services apart in a competitive market" 
          />
        </FadeIn>

        <Grid container spacing={4}>
          {reasons.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FadeIn delay={index * 0.1}>
                <Paper
                  elevation={0}
                  sx={{
                    textAlign: 'center',
                    p: '30px 20px',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    }
                  }}
                >
                  <Box sx={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #3182ce, #0f2342)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'white'
                  }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: '1.5rem', mb: 2, fontWeight: 800 }}>
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

export default WhyChooseMe;
