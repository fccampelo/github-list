import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

// Components
import Search from "../Pages/Search";
import RepositoryList from "../Pages/RepositoryList";
import CommitsList from "../Pages/CommitList";

export const history = createHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact={true} component={Search} />
      <Route
        path="/list-commits/:username/:repos"
        exact={true}
        component={CommitsList}
      />
      <Route path="/:username" exact={true} component={RepositoryList} />
    </Switch>
  </Router>
);

export default Routes;
