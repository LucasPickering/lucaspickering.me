import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(({ palette, spacing, transitions }) => ({
  code: {
    display: "block",
    position: "relative",
    backgroundColor: palette.primary.dark,
    padding: spacing(1),
    width: "100%",

    // Show the copy button on hover
    "&:hover > button": {
      opacity: 1,
    },
  },
  copyButton: {
    position: "absolute",
    top: spacing(1),
    right: spacing(1),
    padding: 0,
    opacity: 0,
    transitionProperty: "opacity",
    transitionDuration: `${transitions.duration.short}ms`,
    transitionTimingFunction: "linear",
  },
}));

/**
 * A code block. Usually rendered from markdown but also can be
 * used directly in JSX.
 */
const Code: React.FC<{ language?: string; value: string }> = ({ value }) => {
  const classes = useStyles();
  const copyText = (): void => {
    // Copy the code to the clipboard by creating a temporary textarea
    const textarea = document.createElement("textarea");
    textarea.id = "t";
    textarea.style.height = "0";
    document.body.appendChild(textarea);
    textarea.value = value;
    const selector = document.querySelector("#t") as HTMLInputElement;
    selector.select();
    document.execCommand("copy");
  };

  return (
    <code className={classes.code}>
      <Button className={classes.copyButton} variant="text" onClick={copyText}>
        Copy
      </Button>
      {value}
    </code>
  );
};

export default Code;
