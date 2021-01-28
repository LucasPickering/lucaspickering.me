import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import UnstyledLink from "components/common/UnstyledLink";

import terra from "./pages/projects/projects/terra";
import { Post } from "util/post";

export const PROJECTS = [terra];

const useStyles = makeStyles(() => ({
  banner: {
    width: "100%",
    height: 240,
    objectFit: "cover",
  },
}));

const PostSummary: React.FC<{ project: Post }> = ({ project }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea component={UnstyledLink} to={`/projects/${project.slug}`}>
        <CardHeader
          title={<Typography variant="h2">{project.title}</Typography>}
        />
        <CardMedia
          className={classes.banner}
          component="img"
          image={project.banner}
          title={project.title}
        />
        <CardContent>{project.summary}</CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostSummary;
