import { Typography } from "@material-ui/core";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <Typography variant="h2">Howdy!</Typography>
        <Typography>
          My name&apos;s Lucas Pickering and I&apos;m on the World Wide Web!
          This is my little slice of it. This is where I share my projects and
          ideas.
        </Typography>
      </div>
      <div>
        <Typography variant="h2">About Me</Typography>
        <Typography>I like computers! And sports.</Typography>
      </div>
    </>
  );
};

export default HomePage;
