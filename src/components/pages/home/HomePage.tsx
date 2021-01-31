import React from "react";
import { Grid, Typography } from "@material-ui/core";

import Link from "components/common/Link";
import { PROJECTS } from "components/pages/projects/ProjectsPage";
import PostSummary from "components/PostSummary";
import { POST_TYPES } from "util/post";

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <Typography variant="h2">Howdy!</Typography>
        <Typography>
          My name's Lucas Pickering and I'm on the World Wide Web! This is my
          little slice of it. This is where I share my projects and ideas.
        </Typography>
      </div>
      <div>
        <Typography variant="h2">About Me</Typography>
        <Typography>
          I like computers! And sports. I write code for a living and also for
          fun. If you like links, then{" "}
          <Link to="#page-footer">check the footer</Link>.
        </Typography>
      </div>
      <div>
        <Typography variant="h2">Wanna see some stuff?</Typography>
        <Typography variant="h3">Here's some projects</Typography>
        <Grid container>
          {PROJECTS.slice(0, 3).map((project) => (
            <Grid key={project.slug} item xs={12} sm={6} lg={4}>
              <PostSummary post={project} />
            </Grid>
          ))}
        </Grid>
        <Link to={POST_TYPES.project.route}>See em all</Link>
      </div>
    </>
  );
};

export default HomePage;
