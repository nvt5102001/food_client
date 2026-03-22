import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
    surfaceDim: string;
    surfaceBright: string;
    outline: string;
    outlineVariant: string;
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
  interface PaletteOptions {
    surfaceContainerLowest?: string;
    surfaceContainerLow?: string;
    surfaceContainer?: string;
    surfaceContainerHigh?: string;
    surfaceContainerHighest?: string;
    surfaceDim?: string;
    surfaceBright?: string;
    outline?: string;
    outlineVariant?: string;
    tertiary?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#785900",
      contrastText: "#ffffff",
      light: "#ffdf9e", // primary-fixed
      dark: "#5b4300", // on-primary-fixed-variant
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
    surfaceDim: "#e0dac3",
    surfaceBright: "#fff9e6",
    outline: "#827660",
    outlineVariant: "#d4c5ab",
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
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
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
