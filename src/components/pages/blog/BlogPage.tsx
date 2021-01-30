import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

import PostDetail from "components/PostDetail";
import PostSummary from "components/PostSummary";
import { BlogPost, POST_TYPES } from "util/post";
import NotFoundPage from "../notFound/NotFoundPage";

const BLOG_POSTS: BlogPost[] = [];

const BlogPage: React.FC = () => {
  return (
    <Switch>
      <Route path={POST_TYPES.blog.route} exact>
        <Grid container justify="center">
          <Grid item>
            <Typography>
              Sometimes I have a thought. Sometimes I write that thought down.
              Sometimes it&apos;s coherent. Sometimes, a passerby has the
              misfortune of reading that thought. Today that&apos;s you.
              I&apos;m sorry.
            </Typography>
            <Typography>
              Much like my mind, this page is currently devoid of content.
              Unlike my mind though, that will change in the future.
            </Typography>
          </Grid>
          {BLOG_POSTS.map((post) => (
            <Grid key={post.slug} item xs={12} md={10} lg={8}>
              <PostSummary post={post} />
            </Grid>
          ))}
        </Grid>
      </Route>

      <Route
        path={`${POST_TYPES.blog.route}/:slug`}
        exact
        render={({ match }) => {
          const post = BLOG_POSTS.find(
            ({ slug }) => match.params.slug === slug
          );

          if (post) {
            return <PostDetail post={post} />;
          }

          return <NotFoundPage />;
        }}
      />
    </Switch>
  );
};

export default BlogPage;