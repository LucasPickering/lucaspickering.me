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
    "& > *": {
      marginLeft: spacing(1),
    },
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
    <>
      <Typography>
        <p>
          Terra is a 3D hexagon-based terrain generation library. It provides a
          highly configurable series of algorithms that can generate lifelike
          terrain. The core library itself doesn't actually render the terrain,
          it just returns it in a format that makes rendering simple. It also
          includes a simple demo that renders the terrain in 3D, to see what
          it's capable of (<Link to="#demo">skip to the demo now</Link>).
        </p>
        <p></p>
      </Typography>

      <Typography variant="h2">How does it work?</Typography>

      <Typography variant="h2">What projects can use it?</Typography>
      <Typography>
        <p>There are a few ways to iteract with </p>
      </Typography>

      <Typography variant="h2">Can I use it now?</Typography>
      <Typography>
        <p>
          Yes! The project isn't currently published on Cargo, but you can grab
        </p>
      </Typography>

      <div>
        <Typography id="demo" variant="h2">
          Demo
        </Typography>

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
                  to="https://terra.lucaspickering.me/"
                  aria-label="Open Full Demo"
                  size="small"
                >
                  <IconOpenInNew />
                </IconButton>

                <IconButton
                  aria-label="Close Demo"
                  size="small"
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
                size="large"
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
    </>
  );
};

const terra: Project = {
  type: "project",
  slug: "terra",
  title: "Terra",
  links: [
    {
      label: "Demo",
      link: "https://terra.lucaspickering.me/",
    },
    {
      label: "Code",
      link: "https://github.com/LucasPickering/terra-rs",
    },
  ],
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
