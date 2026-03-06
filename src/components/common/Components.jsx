import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const SectionTitle = ({ title, subtitle, light = false }) => {
  return (
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: '2.2rem', md: '2.8rem' },
          mb: 2,
          position: 'relative',
          display: 'inline-block',
          color: light ? 'white' : 'inherit',
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '80px',
            height: '5px',
            backgroundColor: '#3182ce',
            bottom: '-15px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '5px',
          },
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            mt: 4,
            maxWidth: '700px',
            mx: 'auto',
            color: light ? 'rgba(255,255,255,0.9)' : 'text.secondary',
            fontSize: '1.2rem',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export const FadeIn = ({ children, delay = 0, sx = {} }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      style={{ width: '100%', ...sx }}
    >
      {children}
    </motion.div>
  );
};
