import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { FadeIn, SectionTitle } from '../common/Components';
import { 
  Storage as StorageIcon,
  Dns as DnsIcon,
  Storefront as StorefrontIcon,
  Sell as SellIcon,
  Security as SecurityIcon,
  Search as SearchIcon
} from '@mui/icons-material';

const skills = [
  {
    icon: <DnsIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Computer Operations',
    desc: 'Expertise in system administration, hardware troubleshooting, and network management for seamless business operations.'
  },
  {
    icon: <StorageIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Data Management',
    desc: 'Comprehensive data handling, cleansing, and structuring to ensure accuracy and accessibility for business intelligence.'
  },
  {
    icon: <StorefrontIcon sx={{ fontSize: '2.5rem' }} />, // Closest to Amazon brand generic
    title: 'Amazon FBA',
    desc: 'Full-service Amazon FBA management including product research, listing optimization, inventory management, and PPC campaigns.'
  },
  {
    icon: <SellIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Wholesale PL',
    desc: 'Strategic wholesale and private label development with proven success in product sourcing, branding, and market penetration.'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'NEBOSH Safety',
    desc: 'Certified in workplace safety and compliance, ensuring operational environments meet international safety standards.'
  },
  {
    icon: <SearchIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'SEO Optimization',
    desc: 'Comprehensive SEO strategies including keyword research, on-page optimization, and content strategy for improved visibility.'
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
