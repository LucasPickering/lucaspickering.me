import React from "react";

import { Post } from "util/post";

const Soze: React.FC = () => {
  return <p>Söze!</p>;
};

const terra: Post = {
  slug: "soze",
  title: "Söze",
  summary: "Case mods",
  banner: "/soze/banner.png",
  Component: Soze,
};

export default terra;
