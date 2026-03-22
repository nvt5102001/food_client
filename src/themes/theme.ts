import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    surfaceContainerLowest?: string;
    surfaceContainerLow?: string;
    surfaceContainer?: string;
    surfaceContainerHigh?: string;
    surfaceContainerHighest?: string;
    tertiary?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#785900",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#77574d",
      contrastText: "#ffffff",
    },
    tertiary: {
      main: "#1b6d24",
      contrastText: "#ffffff",
    },
    error: {
      main: "#ba1a1a",
    },
    background: {
      default: "#fff9e6",
      paper: "#fff9e6",
    },
    text: {
      primary: "#1e1c0e",
      secondary: "#4f4632",
    },
    surfaceContainerLowest: "#ffffff",
    surfaceContainerLow: "#faf4dc",
    surfaceContainer: "#f4eed6",
    surfaceContainerHigh: "#eee8d1",
    surfaceContainerHighest: "#e8e3cb",
    divider: "#d4c5ab",
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Be Vietnam Pro", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Be Vietnam Pro", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Be Vietnam Pro", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Be Vietnam Pro", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Be Vietnam Pro", sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Be Vietnam Pro", sans-serif',
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});
