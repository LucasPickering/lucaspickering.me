import React from "react";
import { Route, Switch } from "react-router-dom";
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
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>

        <Route path="*" exact>
          <NotFoundPage />
        </Route>
      </Switch>
    </PageContainer>
  );
};

export default CoreContent;
