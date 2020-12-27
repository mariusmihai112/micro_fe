import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Landing, Pricing } from "./components";

const generateClassName = createGenerateClassName({ productionPrefix: "ma" });

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
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
