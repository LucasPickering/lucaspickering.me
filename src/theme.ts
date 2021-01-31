import { Theme, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import "@ibm/plex";

function theme(): Theme {
  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: "dark",
        primary: {
          light: "#75E6DA",
          main: "#1cb7d6",
          dark: "#05445E",
        },
        secondary: red,
        divider: "#ffffff",
        background: {
          default: "#011f24",
          paper: "#05445E",
        },
      },

      shape: {
        borderRadius: 2,
      },

      typography: {
        // Makes math for `rem` font sizes easy
        // https://www.sitepoint.com/understanding-and-using-rem-units-in-css/
        htmlFontSize: 10,
        fontFamily: '"IBM Plex Sans", Helvetica, Arial, sans-serif',

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
      overrides: {
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
      },
    })
  );
}

export default theme;
