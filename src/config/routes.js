import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "#containers/LandingPage";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={(props) => <LandingPage />} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
