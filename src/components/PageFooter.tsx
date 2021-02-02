import { makeStyles } from "@material-ui/core";
import React from "react";

import Link from "./common/Link";

const useStyles = makeStyles(({ spacing }) => ({
  pageFooter: {
    marginTop: "auto",
    paddingTop: spacing(2),
    display: "flex",
    justifyContent: "center",
    "& > *": {
      padding: `0px ${spacing(1)}px`,
    },
    "&:focus": {
      border: `1px solid red`,
    },
  },
}));

/**
 * Itty bitty footer on the page
 */
const PageFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.pageFooter} id="page-footer">
      <Link to="mailto:lucas@lucaspickering.me">Email</Link>
      <Link to="https://github.com/LucasPickering/lucaspickering.me">
        GitHub
      </Link>
      <Link to={window.location.href} openInNew={false}>
        Recursion!
      </Link>
    </footer>
  );
};

export default PageFooter;
