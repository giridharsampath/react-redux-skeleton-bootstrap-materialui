import "regenerator-runtime/runtime.js";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "#store";
import GlobalLayout from "#components/common/GlobalLayout";
import Routes from "#config/routes";
// import { loadUser, logout } from "#actions/auth";

const App = ({ history }) => {
  //   useEffect(() => {
  //     store.dispatch(loadUser());
  //   }, []);

  return (
    <Provider store={store}>
      <GlobalLayout>
        <Router history={history}>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </Router>
      </GlobalLayout>
    </Provider>
  );
};

export default App;
