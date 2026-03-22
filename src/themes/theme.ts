import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    surface: Palette['primary'];
    onSurface: Palette['primary'];
    onSurfaceVariant: Palette['primary'];
    outline: Palette['primary'];
    surfaceContainerLow: Palette['primary'];
    surfaceContainerLowest: Palette['primary'];
    surfaceContainerHigh: Palette['primary'];
    surfaceVariant: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    surface?: PaletteOptions['primary'];
    onSurface?: PaletteOptions['primary'];
    onSurfaceVariant?: PaletteOptions['primary'];
    outline?: PaletteOptions['primary'];
    surfaceContainerLow?: PaletteOptions['primary'];
    surfaceContainerLowest?: PaletteOptions['primary'];
    surfaceContainerHigh?: PaletteOptions['primary'];
    surfaceVariant?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#785900",
      light: "#ffdf9e",
      dark: "#261a00",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#77574d",
      light: "#ffdbd0",
      dark: "#2c160e",
      contrastText: "#ffffff",
    },
    tertiary: {
      main: "#1b6d24",
      light: "#a3f69c",
      dark: "#002204",
      contrastText: "#ffffff",
    },
    error: {
      main: "#ba1a1a",
    },
    background: {
      default: "#fff9e6",
      paper: "#ffffff",
    },
    surface: {
      main: "#fff9e6",
    },
    onSurface: {
      main: "#1e1c0e",
    },
    onSurfaceVariant: {
      main: "#4f4632",
    },
    outline: {
      main: "#827660",
    },
    surfaceContainerLow: {
      main: "#faf4dc",
    },
    surfaceContainerLowest: {
      main: "#ffffff",
    },
    surfaceContainerHigh: {
      main: "#eee8d1",
    },
    surfaceVariant: {
      main: "#e8e3cb",
    },
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
    subtitle1: {
      fontFamily: '"Inter", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Inter", sans-serif',
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
    },
    button: {
      fontFamily: '"Be Vietnam Pro", sans-serif',
      fontWeight: 700,
      textTransform: 'none',
    },
    caption: {
      fontFamily: '"Inter", sans-serif',
    },
    overline: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
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
  shape: {
    borderRadius: 8,
  },
});
