import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { Link as IconLink } from "@material-ui/icons";
import React from "react";
import slugify from "slugify";

import UnstyledLink from "../UnstyledLink";

const useStyles = makeStyles(({ spacing, transitions }) => ({
  header: {
    display: "flex",
    alignItems: "center",

    // Show the link on hover
    "&:hover > a": {
      opacity: 1,
    },
  },
  linkButton: {
    marginLeft: spacing(1),
    opacity: 0,
    transitionProperty: "opacity",
    transitionDuration: `${transitions.duration.short}ms`,
    transitionTimingFunction: "linear",
  },
}));

function flatten(
  text: string,
  child: string | React.ReactElement | React.ReactElement[]
): string {
  if (typeof child === "string") {
    return text + child;
  }

  if (Array.isArray(child)) {
    return child.reduce(flatten, text);
  }

  const children: Array<React.ReactElement> = Array.isArray(
    child.props.children
  )
    ? child.props.children
    : [child.props.children];
  return children.reduce(flatten, text);
}

/**
 * A header with a self-link. Usually rendered from markdown but also can be
 * used directly in JSX.
 */
const Header: React.FC<{
  level: number;
  children: React.ReactElement | React.ReactElement[];
}> = ({ level, children }) => {
  const classes = useStyles();
  // Have to type hack this because ts doesn't know the possible values for
  // the `level` prop
  const variant = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  const text = flatten("", children);
  const id = slugify(text).toLowerCase();

  return (
    <span className={classes.header}>
      <Typography id={id} variant={variant}>
        {children}
      </Typography>
      <IconButton
        className={classes.linkButton}
        aria-label="link here"
        size="small"
        component={UnstyledLink}
        to={`#${id}`}
      >
        <IconLink />
      </IconButton>
    </span>
  );
};

export default Header;
