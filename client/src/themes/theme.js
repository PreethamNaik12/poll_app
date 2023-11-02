import { createTheme } from '@mui/material/styles';

const primary = {
    main: '#121212', // Dark grey background color
    light: '#424242', // Lighter grey background color
    dark: '#000000', // Black background color
    contrastText: '#ffffff', // White text color
};

const secondary = {
    main: '#1976D2', // Custom color for secondary elements (you can change this to any color you prefer)
};

const whiteBtn = {
    main: '#ffffff',
    contrastText: 'black',
};

const theme = createTheme({
    palette: {
        primary,
        secondary,
        background: {
            default: primary.main,
        },
        whiteBtn,
    },
    typography: {
        fontFamily: ['Gabarito', 'serif'].join(','),
        h1: {
            fontSize: '40px', // Default font size for h1
            fontWeight: 700,
            lineHeight: 1.2,
            '@media (min-width:960px)': {
                fontSize: '60px', // Font size for screens wider than 960px
            },
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: '1.8rem',
            fontWeight: 500,
            lineHeight: 1.4,
        },
        h5: {
            fontSize: '19px',
            '@media (min-width:960px)': {
                fontSize: '17px', // Font size for screens wider than 960px
            },
        },
        h6: {
            fontSize: '13px',
            '@media (min-width:960px)': {
                fontSize: '16px', // Font size for screens wider than 960px
            },
        },
        // You can add more typography options for other elements as needed
    },
});

export default theme;
