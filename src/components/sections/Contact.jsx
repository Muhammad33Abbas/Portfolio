import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import { FadeIn, SectionTitle } from '../common/Components';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  AccessTime as AccessTimeIcon
} from '@mui/icons-material';
import { Send as SendIcon } from '@mui/icons-material';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
  };

  return (
    <Box id="contact" component="section" sx={{ py: 12.5 }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionTitle 
            title="Let's Work Together" 
            subtitle="Ready to discuss your data management or Amazon FBA project? Get in touch today." 
          />
        </FadeIn>

        <Grid container spacing={7.5}>
          <Grid item xs={12} md={6}>
            <FadeIn delay={0.2}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  p: 5,
                  borderRadius: '20px',
                }}
              >
                <Typography variant="h3" sx={{ fontSize: '1.8rem', mb: 3, color: 'white', fontWeight: 800 }}>
                  Contact Information
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                  <EmailIcon sx={{ fontSize: '1.3rem', mr: 2, color: 'action.hover' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Email</Typography>
                    <Typography variant="body1">michael.chen@professionalportfolio.com</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                  <PhoneIcon sx={{ fontSize: '1.3rem', mr: 2, color: 'action.hover' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Phone</Typography>
                    <Typography variant="body1">+1 (555) 123-4567</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                  <LocationOnIcon sx={{ fontSize: '1.3rem', mr: 2, color: 'action.hover' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Location</Typography>
                    <Typography variant="body1">Available for remote work worldwide</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{ fontSize: '1.3rem', mr: 2, color: 'action.hover' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Availability</Typography>
                    <Typography variant="body1">Monday - Friday: 9 AM - 6 PM (EST)</Typography>
                  </Box>
                </Box>
              </Paper>
            </FadeIn>
          </Grid>

          <Grid item xs={12} md={6}>
            <FadeIn delay={0.4}>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  placeholder="Your Name"
                  required
                  variant="outlined"
                  sx={{ mb: 2.5, bgcolor: 'background.paper' }}
                />
                <TextField
                  fullWidth
                  type="email"
                  placeholder="Your Email"
                  required
                  variant="outlined"
                  sx={{ mb: 2.5, bgcolor: 'background.paper' }}
                />
                <TextField
                  fullWidth
                  placeholder="Subject"
                  required
                  variant="outlined"
                  sx={{ mb: 2.5, bgcolor: 'background.paper' }}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  placeholder="Your Message"
                  required
                  variant="outlined"
                  sx={{ mb: 2.5, bgcolor: 'background.paper' }}
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  fullWidth
                  endIcon={<SendIcon />}
                  sx={{ py: 2 }}
                >
                  Send Message
                </Button>
              </Box>
            </FadeIn>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
