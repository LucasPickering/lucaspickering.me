import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PageLayout from "components/PageLayout";
import BlogPage from "components/pages/blog/BlogPage";
import HomePage from "components/pages/home/HomePage";
import NotFoundPage from "components/pages/notFound/NotFoundPage";
import ProjectsPage from "components/pages/projects/ProjectsPage";
import { POST_TYPES } from "util/post";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <BrowserRouter>
        <PageLayout>
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
        </PageLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
