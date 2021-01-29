import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import NavLink from "components/common/NavLink";

const useStyles = makeStyles(({ palette, transitions, typography }) => {
  const activeStyles = {
    textDecoration: "none",
    backgroundColor: palette.primary.dark,
  };
  return {
    link: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      minWidth: 80,
      height: "100%",

      color: palette.text.primary,
      transitionProperty: "background-color, color",
      transitionDuration: `${transitions.duration.short}ms`,
      transitionTimingFunction: "linear",
      ...typography.body1,

      "&:hover, &:active": {
        ...activeStyles,
        color: palette.text.secondary,
      },
    },
    active: activeStyles,
  };
});

/**
 * A link in the top header bar.
 */
const HeaderLink: React.FC<React.ComponentProps<typeof NavLink>> = ({
  className,
  children,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <NavLink
      className={clsx(classes.link, className)}
      activeClassName={classes.active}
      {...rest}
    >
      <span>{children}</span>
    </NavLink>
  );
};

export default HeaderLink;
