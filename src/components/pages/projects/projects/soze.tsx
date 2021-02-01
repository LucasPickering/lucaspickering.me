import Markdown from "components/common/markdown/Markdown";
import React from "react";

import { Project } from "util/post";
import sozeMd from "./soze.md";

const Soze: React.FC = () => {
  return <Markdown>{sozeMd}</Markdown>;
};

const soze: Project = {
  type: "project",
  slug: "soze",
  title: "Söze",
  links: [{ label: "Code", link: "https://github.com/LucasPickering/soze" }],
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
