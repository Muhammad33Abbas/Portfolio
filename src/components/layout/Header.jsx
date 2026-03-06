import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Container, Box, IconButton, Link, useScrollTrigger, Slide, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    
    // Smooth scroll implementation
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    } else {
        // Fallback for when elements might not be rendered yet or top of page
        if (targetId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled ? '0 5px 20px rgba(0, 0, 0, 0.1)' : '0 5px 20px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
        padding: scrolled ? '10px 0' : '25px 0',
        color: 'text.primary'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link 
            href="#" 
            underline="none"
            onClick={(e) => handleNavClick(e, '#home')}
            sx={{ 
              fontSize: '1.8rem', 
              fontWeight: 900, 
              color: 'primary.main',
            }}
          >
            Muhammad <Box component="span" sx={{ color: 'action.active' }}>Abbas</Box>
          </Link>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5 }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                underline="none"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  fontSize: '1rem',
                  position: 'relative',
                  transition: 'color 0.4s',
                  '&:hover': {
                    color: 'action.active',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: '-5px',
                    left: '0',
                    backgroundColor: '#3182ce',
                    transition: 'width 0.4s',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {link.name}
              </Link>
            ))}
          </Box>

          {/* Mobile Toggle */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: 'primary.main' }}
          >
             {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: '100%', 
            top: '80px', // Offset for header
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            padding: '30px 0',
          },
        }}
        PaperProps={{
            style: {
                position: 'fixed',
                top: scrolled ? '70px' : '100px', // Dynamic top based on header height
            }
        }}
      >
        <List sx={{ textAlign: 'center' }}>
          {navLinks.map((link) => (
            <ListItem key={link.name} disablePadding sx={{ justifyContent: 'center' }}>
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                underline="none"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  fontSize: '1rem',
                  py: 1.5,
                  display: 'block',
                  width: '100%',
                  '&:hover': {
                    color: 'action.active',
                  }
                }}
              >
                <ListItemText primary={link.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
