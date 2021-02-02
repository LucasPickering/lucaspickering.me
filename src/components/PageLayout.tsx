import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

import Navigation from "./navigation/Navigation";
import PageFooter from "./PageFooter";

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => ({
  // The entire page
  pageLayout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },

  // The width-restricted column that holds the body+footer
  pageColumn: {
    flexGrow: 1, // Fill all vertical space
    // Force the footer to the bottom
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    width: "100%",
    [breakpoints.up("xs")]: {
      maxWidth: "100%", // 12/12
    },
    [breakpoints.up("md")]: {
      maxWidth: "83%", // 10/12
    },
    [breakpoints.up("lg")]: {
      maxWidth: "67%", // 8/12
    },

    padding: spacing(2),
    backgroundColor: palette.background.default,
  },
}));

/**
 * Container for all content on the page. This is used in the root to wrap all
 * pages.
 */
const PageLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.pageLayout}>
      <Navigation />

      <Paper className={classes.pageColumn}>
        {children}

        <PageFooter />
      </Paper>
    </div>
  );
};

export default PageLayout;
