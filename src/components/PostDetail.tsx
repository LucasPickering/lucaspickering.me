import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { ArrowForwardIos as IconArrowForwardIos } from "@material-ui/icons";

import terra from "./pages/projects/projects/terra";
import { Post, POST_TYPES } from "util/post";
import Link from "./common/Link";

export const PROJECTS = [terra];

const useStyles = makeStyles(({ spacing }) => ({
  title: {
    display: "flex",
    alignItems: "center",
    "& > :not(:first-child)": {
      marginLeft: spacing(1),
    },
  },
  links: {
    "& > :not(:first-child)": {
      marginLeft: spacing(1),
    },
  },
  image: {
    width: "100%",
    height: 400,
    objectFit: "cover",
  },
}));

const PostDetail: React.FC<{ post: Post }> = ({ post }) => {
  const classes = useStyles();
  const { route: typeRoute, label: typeLabel } = POST_TYPES[post.type];

  return (
    <article>
      <header>
        <Typography className={classes.title} variant="h1">
          <Link to={typeRoute}>{typeLabel}</Link> <IconArrowForwardIos />
          <span>{post.title}</span>
        </Typography>
        {post.links && (
          <div className={classes.links}>
            {post.links.map(({ label, link }) => (
              <Typography key={label} component={Link} to={link}>
                {label}
              </Typography>
            ))}
          </div>
        )}
      </header>
      <img className={classes.image} src={post.banner} alt={post.title} />
      <post.Component />
    </article>
  );
};

export default PostDetail;
