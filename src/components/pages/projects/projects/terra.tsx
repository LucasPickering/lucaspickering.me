import React from "react";

import { Post } from "util/post";

const Terra: React.FC = () => {
  return <p>Terra!</p>;
};

const terra: Post = {
  slug: "terra",
  title: "Terra",
  summary: "Terrain gen",
  banner: "/terra/banner.png",
  Component: Terra,
};

export default terra;
