import React from "react";
import { Route, Switch } from "react-router-dom";
import PageContainer from "./PageLayout";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import ProjectsPage, { PROJECTS } from "./pages/projects/ProjectsPage";
import PostDetail from "./PostDetail";

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
        <Route path="/projects" exact>
          <ProjectsPage />
        </Route>
        <Route
          path="/projects/:slug"
          exact
          render={({ match }) => {
            const post = PROJECTS.find(
              ({ slug: projectSlug }) => match.params.slug === projectSlug
            );

            if (post) {
              return <PostDetail post={post} />;
            }

            return <NotFoundPage />;
          }}
        />

        <Route path="*" exact>
          <NotFoundPage />
        </Route>
      </Switch>
    </PageContainer>
  );
};

export default CoreContent;
