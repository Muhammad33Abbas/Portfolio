import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1a365d',
            dark: '#0f2342', // primary-dark
        },
        secondary: {
            main: '#2d3748',
        },
        // Adding custom colors as augmentations or just using them in components
        action: {
            active: '#3182ce', // accent
            hover: '#4299e1', // accent-light
        },
        background: {
            default: '#ffffff',
            paper: '#f7fafc', // light
        },
        text: {
            primary: '#2d3748', // secondary color from CSS
            secondary: '#1a365d', // primary color from CSS acting as headings
        },
    },
    typography: {
        fontFamily: "'Inter', sans-serif",
        h1: {
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            color: '#1a365d',
        },
        h2: {
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            color: '#1a365d',
        },
        h3: {
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            color: '#1a365d',
        },
        h4: {
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            color: '#1a365d',
        },
        h5: {
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            color: '#1a365d',
        },
        h6: {
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            color: '#1a365d',
        },
        button: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            textTransform: 'none',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    padding: '12px 36px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                        transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
                },
                containedPrimary: {
                    backgroundColor: '#3182ce',
                    '&:hover': {
                        backgroundColor: '#1a365d',
                    },
                },
                outlinedPrimary: {
                    color: '#1a365d',
                    borderColor: '#1a365d',
                    '&:hover': {
                        backgroundColor: '#1a365d',
                        color: '#ffffff',
                        borderColor: '#1a365d',
                    },
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    maxWidth: '1200px',
                },
            },
        },
    },
});

export default theme;
