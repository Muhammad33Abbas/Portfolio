import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { FadeIn, SectionTitle } from '../common/Components';
import {
  CenterFocusStrong as CenterFocusStrongIcon,
  BarChart as BarChartIcon,
  Store as StoreIcon,
  ContentPasteSearch as ContentPasteSearchIcon
} from '@mui/icons-material';

const highlights = [
  {
    icon: <CenterFocusStrongIcon sx={{ fontSize: '2.2rem' }} />,
    title: 'Data Accuracy Excellence',
    desc: 'Maintained 99.8% data accuracy across multiple client projects through meticulous quality control processes.'
  },
  {
    icon: <BarChartIcon sx={{ fontSize: '2.2rem' }} />,
    title: 'Process Optimization',
    desc: 'Reduced data processing time by 40% through implementation of automated systems and streamlined workflows.'
  },
  {
    icon: <StoreIcon sx={{ fontSize: '2.2rem' }} />,
    title: 'Amazon FBA Growth',
    desc: 'Increased client Amazon FBA sales by 220% within 12 months through optimized listings and strategic PPC campaigns.'
  },
  {
    icon: <ContentPasteSearchIcon sx={{ fontSize: '2.2rem' }} />,
    title: 'SEO Performance',
    desc: 'Improved organic search traffic by 180% for e-commerce clients through comprehensive keyword and content strategies.'
  }
];

const Experience = () => {
  return (
    <Box id="experience" component="section" sx={{ py: 12.5 }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionTitle 
            title="Key Experience & Highlights" 
            subtitle="Notable achievements and measurable results in data management and e-commerce" 
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
