import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import PageContainer from "./PageLayout";

/**
 * Router & page layout
 */
const CoreContent: React.FC = () => {
  return (
    <PageContainer>
      <Switch>
        <Redirect from="/login" to="/" exact />

        <Route path="/" exact>
          Home
        </Route>
      </Switch>
    </PageContainer>
  );
};

export default CoreContent;
