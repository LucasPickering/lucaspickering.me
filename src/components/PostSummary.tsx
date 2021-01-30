import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import UnstyledLink from "components/common/UnstyledLink";

import terra from "./pages/projects/projects/terra";
import { Post, POST_TYPES } from "util/post";

export const PROJECTS = [terra];

const useStyles = makeStyles(() => ({
  banner: {
    width: "100%",
    height: 240,
    objectFit: "cover",
  },
}));

const PostSummary: React.FC<{ post: Post }> = ({ post }) => {
  const classes = useStyles();
  const { route: typeRoute } = POST_TYPES[post.type];

  return (
    <Card>
      <CardActionArea component={UnstyledLink} to={`${typeRoute}/${post.slug}`}>
        <CardHeader
          title={post.title}
          titleTypographyProps={{ component: "h2", variant: "h2" }}
          subheader={post.tags.join(", ")}
        />
        <CardMedia
          className={classes.banner}
          component="img"
          image={post.banner}
          title={post.title}
        />
        <CardContent>{post.summary}</CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostSummary;
