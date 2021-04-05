import { Theme, createMuiTheme, responsiveFontSizes } from "@material-ui/core";

function hexToRgba(hex: string, alpha: number): string {
  const num = parseInt(hex.substring(1), 16);
  if (!num) {
    throw new Error(`Invalid hex color: ${hex}`);
  }

  const red = ((num >> 16) & 0xff) / 255.0;
  const green = ((num >> 8) & 0xff) / 255.0;
  const blue = (num & 0xff) / 255.0;
  return `rgba(${red},${green},${blue},${alpha})`;
}

function theme(): Theme {
  const theme = responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: "dark",
        primary: {
          light: "#82EAFF",
          main: "#1799B3",
          dark: "#086375",
        },
        secondary: {
          main: "#FF9721",
          dark: "#8A4A00",
        },
        divider: "#ffffff",
        background: {
          default: "#04323B",
        },
        action: {
          focus: hexToRgba("#FF9721", 0.2),
        },
      },

      shape: {
        borderRadius: 2,
      },

      typography: {
        // Makes math for `rem` font sizes easy
        // https://www.sitepoint.com/understanding-and-using-rem-units-in-css/
        htmlFontSize: 10,
        fontFamily: "Helvetica, Arial, sans-serif",

        h1: {
          fontSize: "3.2rem",
          margin: "1rem 0",
        },
        h2: {
          fontSize: "2.8rem",
          margin: "1rem 0",
        },
        h3: {
          fontSize: "2.4rem",
          margin: "0.875rem 0",
        },
        h4: {
          fontSize: "2.0rem",
        },
        h5: {
          fontSize: "1.6rem",
        },
        h6: {
          fontSize: "1.2rem",
        },
        body1: {
          margin: "1rem 0",
        },
        button: {
          textTransform: "none",
        },
      },

      props: {
        MuiCard: {
          component: "section",
        },
        MuiGrid: {
          spacing: 2,
        },
      },
    })
  );

  // Split out overrides so we can access the palette here
  theme.overrides = {
    MuiCard: {
      root: {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    MuiCardHeader: {
      content: {
        "& > *": {
          margin: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: 2,
      },
    },
    MuiLink: {
      root: {
        color: theme.palette.secondary.main,
      },
    },
  };

  return theme;
}

export default theme;
