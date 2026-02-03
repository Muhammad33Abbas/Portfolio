import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { FadeIn, SectionTitle } from '../common/Components';
import { 
  Keyboard as KeyboardIcon,
  Computer as ComputerIcon,
  ShoppingCart as ShoppingCartIcon,
  Inventory as InventoryIcon,
  TrendingUp as TrendingUpIcon,
  HealthAndSafety as HealthAndSafetyIcon
} from '@mui/icons-material';

const services = [
  {
    icon: <KeyboardIcon sx={{ fontSize: '1.8rem' }} />,
    title: 'Data Entry & Management',
    desc: 'Precise data entry, control, and structured data management services with guaranteed accuracy and timely delivery.'
  },
  {
    icon: <ComputerIcon sx={{ fontSize: '1.8rem' }} />,
    title: 'Computer Operations',
    desc: 'Administrative support, system management, and technical operations to ensure seamless business functionality.'
  },
  {
    icon: <ShoppingCartIcon sx={{ fontSize: '1.8rem' }} />,
    title: 'Amazon FBA Management',
    desc: 'Complete Amazon FBA account management, product research, listing optimization, and performance analytics.'
  },
  {
    icon: <InventoryIcon sx={{ fontSize: '1.8rem' }} />,
    title: 'Wholesale & PL Support',
    desc: 'Strategic business support for wholesale and private label ventures including sourcing, branding, and scaling.'
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: '1.8rem' }} />,
    title: 'SEO Services',
    desc: 'Keyword research, on-page SEO, content optimization, and performance tracking to improve search visibility.'
  },
  {
    icon: <HealthAndSafetyIcon sx={{ fontSize: '1.8rem' }} />,
    title: 'Safety Compliance',
    desc: 'Workplace safety compliance and awareness support based on NEBOSH certification and industry best practices.'
  }
];

const Services = () => {
  return (
    <Box id="services" component="section" sx={{ py: 12.5 }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionTitle 
            title="Professional Services" 
            subtitle="Comprehensive solutions tailored to business needs across data management, e-commerce, and compliance" 
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
