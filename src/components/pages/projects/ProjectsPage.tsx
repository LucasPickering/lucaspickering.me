import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";

import PostDetail from "components/PostDetail";
import PostSummary from "components/PostSummary";
import { Project } from "util/post";
import terra from "./projects/terra";
import soze from "./projects/soze";
import NotFoundPage from "../notFound/NotFoundPage";

const PROJECTS: Project[] = [terra, soze];

const ProjectsPage: React.FC = () => {
  return (
    <Switch>
      <Route path="/projects" exact>
        <Grid container justify="center">
          {PROJECTS.map((project) => (
            <Grid key={project.slug} item xs={12} md={10} lg={8}>
              <PostSummary post={project} />
            </Grid>
          ))}
        </Grid>
      </Route>

      <Route
        path="/projects/:slug"
        exact
        render={({ match }) => {
          const post = PROJECTS.find(({ slug }) => match.params.slug === slug);

          if (post) {
            return <PostDetail post={post} />;
          }

          return <NotFoundPage />;
        }}
      />
    </Switch>
  );
};

export default ProjectsPage;
