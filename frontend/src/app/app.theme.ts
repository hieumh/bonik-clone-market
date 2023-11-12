import { COLORS } from "@/constants/ui.constant";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    background: {
      default: COLORS.primary,
    },
    text: {
      primary: COLORS.text,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "underline",
          color: COLORS.text,
          fontWeight: 600,
        },
      },
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Set the default font family for all variants
    h1: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "0.02em",
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "0.02em",
    },
    h3: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: "0.02em",
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: "0.02em",
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.02em",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.02em",
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 300,
      letterSpacing: "0.08em",
    },
    caption: {
      fontSize: ".875rem",
      fontWeight: 400,
      lineHeight: 1.3,
      letterSpacing: "0.02em",
    },
    overline: {
      fontSize: ".875rem",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
    },
    body1: {
      fontSize: ".875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.02em",
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.02em",
    },
  },
});
