import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { FadeIn, SectionTitle } from '../common/Components';

const educationData = [
  { year: '2025 – 2027', title: 'ADS CS', school: 'Swat University', desc: 'Currently pursuing an Associate Degree of Science in Computer Science.' },
  { year: '2023 – 2025', title: 'FSC (In CS)', school: 'Swat board', desc: 'Higher Secondary School Certificate with a focus on Computer Science.' },
  { year: '2023', title: 'Matric', school: 'Swat board', desc: 'Secondary School Certificate.' },
  { year: '2023', title: 'Diploma In Information Technology', school: 'DIT', desc: 'Professional diploma covering essential IT skills and applications.' },
  { year: '2021', title: 'Advance certificate Information technology', school: 'ACIT', desc: 'Advanced certification in information technology systems.' },
];

const Education = () => {
  return (
    <Box id="education" component="section" sx={{ py: 12.5, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionTitle 
            title="Education & Certifications" 
            subtitle="Professional qualifications and continuous learning to maintain industry expertise" 
          />
        </FadeIn>

        <Box sx={{
          maxWidth: '900px',
          mx: 'auto',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: { xs: '30px', md: '50%' },
            transform: { xs: 'none', md: 'translateX(-50%)' },
            width: '2px',
            height: '100%',
            bgcolor: '#e2e8f0', // gray
          }
        }}>
          {educationData.map((item, index) => (
            <Box 
              key={index}
              sx={{
                display: 'flex',
                mb: 6.25, // 50px
                position: 'relative',
                justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-start' : 'flex-end' },
                pl: { xs: '60px', md: index % 2 === 0 ? 0 : 'calc(50% + 30px)' },
                pr: { xs: 0, md: index % 2 === 0 ? 'calc(50% + 30px)' : 0 },
              }}
            >
              <FadeIn delay={index * 0.1}>
                {/* Timeline Dot positioned relative to content or absolute */}
                <Box 
                  sx={{
                    position: 'absolute',
                    top: '30px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    bgcolor: 'action.active',
                    zIndex: 1,
                    left: { xs: '21px', md: index % 2 === 0 ? 'auto' : '-40px' }, // Custom logic for dots
                    right: { xs: 'auto', md: index % 2 === 0 ? '-40px' : 'auto' },
                  }} 
                />
                
                <Paper
                  elevation={0}
                  sx={{
                    p: 3.75, // 30px
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    width: '100%',
                    position: 'relative',
                  }}
                >
                  <Box 
                    component="span" 
                    sx={{
                      display: 'inline-block',
                      padding: '5px 15px',
                      bgcolor: 'action.active',
                      color: 'white',
                      borderRadius: '20px',
                      fontWeight: 600,
                      mb: 2,
                      fontSize: '0.9rem'
                    }}
                  >
                    {item.year}
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: '1.4rem', mb: 1.25, fontWeight: 800 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                    {item.school}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Paper>
              </FadeIn>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Education;
