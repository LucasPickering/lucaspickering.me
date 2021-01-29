import {
  AppBar,
  Toolbar,
  makeStyles,
  SwipeableDrawer,
  IconButton,
  List,
} from "@material-ui/core";
import { Menu as IconMenu } from "@material-ui/icons";
import React, { useState } from "react";
import HeaderLink from "./HeaderLink";
import DrawerLink from "./DrawerLink";
import useScreenSize from "hooks/useScreenSize";

const LINKS: Array<{ to: string; label: string; exact: boolean }> = [
  {
    to: "/",
    label: "Home",
    exact: true,
  },
  {
    to: "/projects",
    label: "Projects",
    exact: false,
  },
  {
    to: "/blog",
    label: "Blog",
    exact: false,
  },
];

const useStyles = makeStyles(({ palette, spacing }) => ({
  appBar: {
    backgroundColor: palette.primary.main,
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
