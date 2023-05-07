import { createTheme } from "@mui/material";
import { blue, grey, orange, purple, red } from "@mui/material/colors";
import React from "react";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "2.25rem",
      fontWeight: "600",
      "@media (max-width:967px)": {
        fontSize: "1.5rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "600",
      "@media (max-width:967px)": {
        fontSize: "1.25rem",
      },
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: "600",
      "@media (max-width:967px)": {
        fontSize: "1.125rem",
      },
    },
    h4: {
      fontWeight: "600",
    },
    subtitle1: {
      fontSize: ".875rem",
      "@media (max-width:967px)": {
        fontSize: ".813rem",
      },
    },
    subtitle2: {
      fontSize: ".813rem",
      "@media (max-width:967px)": {
        fontSize: ".75rem",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          backgroundColor: "#705BD7",
          padding: "1rem",
          borderRadius: "0.5rem",
          textTransform: "capitalize",
          ":hover": {
            backgroundColor: "#5A43CB",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
  },
});
export default theme;
