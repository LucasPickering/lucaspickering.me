import {
  AppBar,
  Toolbar,
  makeStyles,
  SwipeableDrawer,
  IconButton,
  List,
  Typography,
} from "@material-ui/core";
import { Menu as IconMenu } from "@material-ui/icons";
import React, { useState } from "react";
import HeaderLink from "./HeaderLink";
import DrawerLink from "./DrawerLink";
import useScreenSize from "hooks/useScreenSize";
import UnstyledLink from "components/common/UnstyledLink";
import { POST_TYPES } from "util/post";

const LINKS: Array<{ to: string; label: string; exact: boolean }> = [
  {
    to: "/",
    label: "Home",
    exact: true,
  },
  {
    to: POST_TYPES.project.route,
    label: POST_TYPES.project.label,
    exact: false,
  },
  // Super secret for now
  // {
  //   to: POST_TYPES.blog.route,
  //   label: POST_TYPES.blog.label,
  //   exact: false,
  // },
];

const useStyles = makeStyles(({ palette, spacing }) => ({
  appBar: {
    backgroundColor: palette.primary.main,
  },
  title: {
    marginRight: spacing(4),
    color: palette.text.primary,
  },
  drawer: {
    width: 150,
  },
  drawerButton: {
    marginRight: spacing(1),
  },
}));

/**
 * Site-wide navigation controls. Will be a bar on large screens, and a drawer
 * on small ones.
 */
const Navigation: React.FC = () => {
  const classes = useStyles();
  const drawerNavEnabled = useScreenSize() === "small";

  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = (): void => setDrawerOpen(true);
  const closeDrawer = (): void => setDrawerOpen(false);

  return (
    <AppBar className={classes.appBar} position="static" color="default">
      <Toolbar component="nav" variant="dense">
        <Typography
          className={classes.title}
          variant="h1"
          component={UnstyledLink}
          to="/"
        >
          A Thought
        </Typography>

        {drawerNavEnabled ? (
          // Drawer nav, only shown on small screens
          <>
            <SwipeableDrawer
              open={drawerOpen}
              onOpen={openDrawer}
              onClose={closeDrawer}
            >
              <List className={classes.drawer} component="nav">
                {LINKS.map(({ to, label, exact }) => (
                  <DrawerLink
                    key={to}
                    to={to}
                    exact={exact}
                    onClick={closeDrawer}
                  >
                    {label}
                  </DrawerLink>
                ))}
              </List>
            </SwipeableDrawer>
            <IconButton
              className={classes.drawerButton}
              color="inherit"
              aria-label="open drawer"
              onClick={openDrawer}
              edge="start"
            >
              <IconMenu />
            </IconButton>
          </>
        ) : (
          // Normal list of links, shown on medium-large screens
          LINKS.map(({ to, label, exact }) => (
            <HeaderLink key={to} to={to} exact={exact}>
              {label}
            </HeaderLink>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
