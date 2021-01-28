import { makeStyles } from "@material-ui/core";
import React from "react";

import Link from "./common/Link";
import Navigation from "./navigation/Navigation";

const useStyles = makeStyles(({ spacing }) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  pageBody: {
    width: "100%",
    maxWidth: 1280,
    padding: spacing(2),
    paddingBottom: 0,
  },
  pageFooter: {
    marginTop: "auto",
    padding: spacing(2),
    display: "flex",
    justifyContent: "center",
    "& > *": {
      padding: `0px ${spacing(1)}px`,
    },
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

      <footer className={classes.pageFooter}>
        <Link to="mailto:lucas@lucaspickering.me">Email</Link>
        <Link to="https://github.com/LucasPickering/lucaspickering.me">
          GitHub
        </Link>
      </footer>
    </div>
  );
};

export default PageContainer;
