import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Links from "./containers/Seacoast";
import Blog from "./containers/Blog";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/seacoast">
        <Links />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route>
        <NotFound />
      </Route>

    </Switch>
  );
}