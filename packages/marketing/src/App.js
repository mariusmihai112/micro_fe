import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Landing, Pricing } from "./components";

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing">
              <Pricing />
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
