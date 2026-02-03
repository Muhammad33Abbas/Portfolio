import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import WhyChooseMe from './components/sections/WhyChooseMe';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ overflowX: 'hidden' }}> {/* Prevent horizontal scroll */}
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Education />
          <Experience />
          <WhyChooseMe />
          <Contact />
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
