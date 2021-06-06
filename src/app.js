import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { useSelector } from "react-redux";

export default function App() {
  const hist = createBrowserHistory();
  const isSuccess = useSelector((state) => state.logIn.isSuccess);
  return (
    <Router history={hist}>
      <Switch>
        {/* {!isSuccess ? (
          <>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect from="/" to="/login" />
          </>
        ) : (
          <>
            <Route path="/admin" component={Admin} />
            <Route path="/rtl" component={RTL} />
            <Redirect from="/" to="/admin" />
          </>
        )} */}
          <>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/admin" component={Admin} />
            <Route path="/rtl" component={RTL} />
            <Redirect from="/" to="/admin" />
          </>
      </Switch>
    </Router>
  );
}
