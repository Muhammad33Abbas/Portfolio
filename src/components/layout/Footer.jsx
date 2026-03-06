import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', py: 8, pt: '60px', pb: '30px' }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 0 },
          mb: 5 
        }}>
          {/* Logo */}
          <Box sx={{ fontSize: '1.8rem', fontWeight: 900 }}>
            Muhammad <Box component="span" sx={{ color: 'action.active' }}>Abbas</Box>
          </Box>

          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {[
              { icon: <LinkedInIcon />, href: '#' },
              { icon: <TwitterIcon />, href: '#' },
              { icon: <GitHubIcon />, href: '#' },
              { icon: <InstagramIcon />, href: '#' },
            ].map((social, index) => (
              <IconButton 
                key={index} 
                href={social.href}
                sx={{ 
                  width: 40, 
                  height: 40, 
                  bgcolor: 'rgba(255,255,255,0.1)', 
                  color: 'white',
                  transition: 'all 0.4s',
                  '&:hover': {
                    bgcolor: 'action.active',
                    transform: 'translateY(-3px)',
                  }
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Copyright */}
        <Box sx={{ 
          textAlign: 'center', 
          pt: 4, 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          opacity: 0.7,
          fontSize: '0.9rem'
        }}>
          <Typography variant="body2" component="p">&copy; 2026 Muhammad Abbas. All rights reserved.</Typography>
          <Typography variant="body2" component="p">Computer Science Student & Frontend Developer</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
