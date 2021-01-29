import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import terra from "./pages/projects/projects/terra";
import { Post } from "util/post";

export const PROJECTS = [terra];

const useStyles = makeStyles(() => ({
  projectSummary: {},
  image: {
    width: "100%",
    height: 400,
    objectFit: "cover",
  },
}));

const PostDetail: React.FC<{ post: Post }> = ({ post }) => {
  const classes = useStyles();

  return (
    <article>
      <header>
        <Typography variant="h1">{post.title}</Typography>
        {post.subtitle && (
          <Typography variant="subtitle1">{post.subtitle}</Typography>
        )}
      </header>
      <img className={classes.image} src={post.banner} alt={post.title} />
      <post.Component />
    </article>
  );
};

export default PostDetail;
