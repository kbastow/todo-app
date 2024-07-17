import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: "2rem",
      textAlign: "center"
    },
  },
  spacing: 4,
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '1.4rem',
          color: '#666',
        },
        secondary: {
          fontSize: '1rem',
          color: '#888',
        }
      }
    }
  },
});

export default theme;