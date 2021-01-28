import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme";
import CoreContent from "components/CoreContent";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <BrowserRouter>
        <CoreContent />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
