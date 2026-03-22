import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    surfaceContainerLow: string;
    surfaceContainerLowest: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
    onSurfaceVariant: string;
    tertiary: Palette['primary'];
    tertiaryContainer: string;
    onTertiaryContainer: string;
  }
  interface PaletteOptions {
    surfaceContainerLow?: string;
    surfaceContainerLowest?: string;
    surfaceContainerHigh?: string;
    surfaceContainerHighest?: string;
    onSurfaceVariant?: string;
    tertiary?: PaletteOptions['primary'];
    tertiaryContainer?: string;
    onTertiaryContainer?: string;
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
      contrastText: "#ffffff",
    },
    background: {
      default: "#fff9e6",
      paper: "#fff9e6",
    },
    text: {
      primary: "#1e1c0e",
      secondary: "#4f4632",
    },
    surfaceContainerLow: "#faf4dc",
    surfaceContainerLowest: "#ffffff",
    surfaceContainerHigh: "#eee8d1",
    surfaceContainerHighest: "#e8e3cb",
    onSurfaceVariant: "#4f4632",
    tertiaryContainer: "#8cde86",
    onTertiaryContainer: "#0d631b",
    divider: "#d4c5ab",
  },
  typography: {
    fontFamily: '"Inter", "system-ui", "Roboto", "sans-serif"',
    h1: {
      fontFamily: '"Be Vietnam Pro", "serif"',
      fontWeight: 800,
    },
    h2: {
      fontFamily: '"Be Vietnam Pro", "serif"',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Be Vietnam Pro", "serif"',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Be Vietnam Pro", "serif"',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Be Vietnam Pro", "serif"',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Be Vietnam Pro", "serif"',
      fontWeight: 700,
    },
    button: {
      fontFamily: '"Be Vietnam Pro", "serif"',
      fontWeight: 700,
      textTransform: 'none',
    },
    overline: {
      fontFamily: '"Inter", "sans-serif"',
      fontWeight: 700,
      letterSpacing: '0.1em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});
