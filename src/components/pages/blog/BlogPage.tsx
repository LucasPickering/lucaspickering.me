import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";

import PostDetail from "components/PostDetail";
import PostSummary from "components/PostSummary";
import { BlogPost } from "util/post";
import NotFoundPage from "../notFound/NotFoundPage";

const BLOG_POSTS: BlogPost[] = [];

const BlogPage: React.FC = () => {
  return (
    <Switch>
      <Route path="/blog" exact>
        <Grid container justify="center">
          Much like my mind, this page is currently devoid of content. Unlike my
          mind though, that will change in the future.
          {BLOG_POSTS.map((post) => (
            <Grid key={post.slug} item xs={12} md={10} lg={8}>
              <PostSummary post={post} />
            </Grid>
          ))}
        </Grid>
      </Route>

      <Route
        path="/blog/:slug"
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
