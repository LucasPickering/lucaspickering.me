import React from "react";

import { Project } from "util/post";

const Soze: React.FC = () => {
  return <p>Söze!</p>;
};

const soze: Project = {
  type: "projects",
  slug: "soze",
  title: "Söze",
  summary: (
    <>
      Hardware mods for my PC, with a suite of software services to make it all
      run smoothly. The mods include an LCD mounted on the front and a strip of
      RGB LEDs inside, all driven by a Raspberry Pi Zero.
    </>
  ),
  tags: ["python", "typescript", "hardware"],
  banner: "/soze/banner.png",
  Component: Soze,
};

export default soze;
