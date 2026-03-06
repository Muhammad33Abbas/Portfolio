import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { FadeIn, SectionTitle } from '../common/Components';
import { 
  Code as CodeIcon,
  Devices as DevicesIcon,
  Storage as StorageIcon,
  CloudQueue as CloudQueueIcon,
  Source as SourceIcon,
  Terminal as TerminalIcon
} from '@mui/icons-material';

const skills = [
  {
    icon: <CodeIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Languages',
    desc: 'Proficient in HTML5, CSS3, and JavaScript (ES6+) for building modern, responsive web applications.'
  },
  {
    icon: <DevicesIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Frontend Frameworks',
    desc: 'Expertise in React.js, Bootstrap 5, and Material UI (MUI) to create sleek and interactive user interfaces.'
  },
  {
    icon: <CloudQueueIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Backend & Database',
    desc: 'Experience with Node.js, Express.js, and Firebase (BaaS) for scalable server-side development and data storage.'
  },
  {
    icon: <TerminalIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'React Ecosystem',
    desc: 'Skilled in using React Router for navigation and React Hook Form for efficient form management.'
  },
  {
    icon: <SourceIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Tools & APIs',
    desc: 'Familiar with Git/GitHub for version control and collaborating through RESTful APIs.'
  },
  {
    icon: <StorageIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Productivity',
    desc: 'Competent in using MS Office for documentation and general administrative tasks.'
  }
];

const Skills = () => {
  return (
    <Box id="skills" component="section" sx={{ py: 12.5, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionTitle 
            title="Professional Skills" 
            subtitle="Technical expertise and specialized knowledge to deliver exceptional results" 
          />
        </FadeIn>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FadeIn delay={index * 0.1}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4, // 35px 30px ~ 4 * 8px
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
                    borderLeft: '5px solid',
                    borderColor: 'action.active',
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                    }
                  }}
                >
                  <Box sx={{ color: 'action.active', mb: 2.5 }}>
                    {skill.icon}
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: '1.5rem', mb: 2, fontWeight: 800 }}>
                    {skill.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {skill.desc}
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

export default Skills;
