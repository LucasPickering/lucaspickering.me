import { makeStyles } from "@material-ui/core";
import React from "react";

import Navigation from "./navigation/Navigation";
import PageFooter from "./PageFooter";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  pageBody: {
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
    paddingBottom: 0, // Handled by the footer
  },
}));

/**
 * Container for all content on the page. This is used in the root to wrap all
 * pages.
 */
const PageContainer: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <Navigation />

      <div className={classes.pageBody}>{children}</div>

      <PageFooter />
    </div>
  );
};

export default PageContainer;
