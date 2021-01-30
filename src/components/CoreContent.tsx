import React from "react";
import { Route, Switch } from "react-router-dom";
import { POST_TYPES } from "util/post";
import PageContainer from "./PageLayout";
import BlogPage from "./pages/blog/BlogPage";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import ProjectsPage from "./pages/projects/ProjectsPage";

/**
 * Router & page layout
 */
const CoreContent: React.FC = () => {
  return (
    <PageContainer>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path={POST_TYPES.blog.route}>
          <BlogPage />
        </Route>
        <Route path={POST_TYPES.project.route}>
          <ProjectsPage />
        </Route>

        <Route path="*" exact>
          <NotFoundPage />
        </Route>
      </Switch>
    </PageContainer>
  );
};

export default CoreContent;
