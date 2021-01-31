import { Typography } from "@material-ui/core";
import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "./Link";

type Props = React.ComponentProps<typeof ReactMarkdown>;

const RENDERERS: Props["renderers"] = {
  heading: ({ level, children }) => {
    // Have to type hack this because ts doesn't know the possible values for
    // the `level` prop
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const variant = `h${level}` as any;
    return <Typography variant={variant}>{children}</Typography>;
  },
  link: ({ href, children }) => <Link to={href}>{children}</Link>,
  paragraph: ({ children }) => (
    <Typography variant="body1">{children}</Typography>
  ),
  // TODO fill out more of these
};

const Markdown: React.FC<Props> = ({ renderers, ...rest }) => (
  <ReactMarkdown
    renderers={{
      ...RENDERERS,
      ...renderers,
    }}
    {...rest}
  />
);

export default Markdown;
