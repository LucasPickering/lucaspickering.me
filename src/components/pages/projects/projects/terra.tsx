import {
  makeStyles,
  Box,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import {
  Close as IconClose,
  OpenInNew as IconOpenInNew,
} from "@material-ui/icons";
import Link from "components/common/Link";
import UnstyledLink from "components/common/UnstyledLink";
import React, { useState } from "react";

import { Project } from "util/post";

const useStyles = makeStyles(({ spacing }) => ({
  demo: {
    position: "relative",
    width: "100%",
    height: 400,
  },

  demoIframe: {
    border: "none",
  },
  demoButtons: {
    position: "absolute",
    top: spacing(1),
    right: spacing(1),
  },

  demoPreLoad: {
    width: "100%",
    height: "100%",
  },
  demoPreLoadBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: 'url("/terra/banner.png")',
    filter: "blur(4px)",
    // Reflect over x, so it doesn't look so much like the banner
    transform: "scale(-1, 1)",
  },
  demoPreLoadButton: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
  },
}));

const Terra: React.FC = () => {
  const classes = useStyles();
  const [showDemo, setShowDemo] = useState<boolean>(false);

  return (
    <div>
      <p>Terra is a 3D hexagon-based terrain generation library.</p>

      <div>
        <Typography variant="h2">Demo</Typography>

        <Typography>
          Full demo available at{" "}
          <Link to="https://terra.lucaspickering.me/">
            terra.lucaspickering.me
          </Link>
          .
        </Typography>

        <Box className={classes.demo} border={1}>
          {showDemo ? (
            <>
              <iframe
                className={classes.demoIframe}
                title="Terra"
                width="100%"
                height="100%"
                src="https://terra.lucaspickering.me/"
              />
              <div className={classes.demoButtons}>
                <IconButton
                  component={UnstyledLink}
                  aria-label="Open Full Demo"
                  to="https://terra.lucaspickering.me/"
                >
                  <IconOpenInNew />
                </IconButton>

                <IconButton
                  aria-label="Close Demo"
                  onClick={() => setShowDemo(false)}
                >
                  <IconClose />
                </IconButton>
              </div>
            </>
          ) : (
            <div className={classes.demoPreLoad}>
              <div className={classes.demoPreLoadBackground} />
              <Button
                className={classes.demoPreLoadButton}
                onClick={() => setShowDemo(true)}
              >
                Load Demo
              </Button>
            </div>
          )}
        </Box>
        <Typography variant="caption">
          Warning: This demo is intensive! It may be slow on a laptop or phone.
        </Typography>
      </div>
    </div>
  );
};

const terra: Project = {
  type: "projects",
  slug: "terra",
  title: "Terra",
  subtitle: (
    <Link to="https://terra.lucaspickering.me/">terra.lucaspickering.me</Link>
  ),
  summary: (
    <>
      A hexagon-tile terrain generation system. Dynamically generate and explore
      terrain. This is a generic toolkit that can be used to generate terrain
      for renderings, games, etc.
    </>
  ),
  tags: ["rust", "3d"],
  banner: "/terra/banner.png",
  Component: Terra,
};

export default terra;
