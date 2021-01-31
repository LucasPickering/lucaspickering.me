import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ReactMarkdown from "react-markdown";

import Link from "../Link";
import Code from "./Code";
import Header from "./Header";

const useStyles = makeStyles(() => ({
  markdown: {
    "& img": {
      display: "block",
      margin: "0 auto",
    },
  },
}));

interface Props {
  children: string;
}

const RENDERERS: React.ComponentProps<typeof ReactMarkdown>["renderers"] = {
  code: Code,
  heading: Header,
  // Bit of a hack on the width/height but it works for now
  image: ({ src, alt }) => <img src={src} alt={alt} width="400" height="400" />,
  link: ({ href, children }) => <Link to={href}>{children}</Link>,
  paragraph: ({ children }) => (
    <Typography variant="body1">{children}</Typography>
  ),
};

/**
 * Render markdown text as JSX. This doesn't forward props to ReactMarkdown
 * because of annoying type fuckery. If you need that prop forwarding, then good
 * luck figuring out the types.
 */
const Markdown: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <ReactMarkdown
      className={classes.markdown}
      allowDangerousHtml
      renderers={RENDERERS}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
