import React from "react";
import { Grid } from "@material-ui/core";

import PostSummary from "components/PostSummary";
import terra from "./projects/terra";
import soze from "./projects/soze";

export const PROJECTS = [terra, soze];

const ProjectsPage: React.FC = () => {
  return (
    <Grid container justify="center">
      {PROJECTS.map((project) => (
        <Grid key={project.slug} item xs={12} md={10} lg={8}>
          <PostSummary project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsPage;
