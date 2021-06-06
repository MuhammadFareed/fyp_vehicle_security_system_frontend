import React from "react";
import ReactDOM from "react-dom";
import "assets/css/material-dashboard-react.css?v=1.9.0";
import App from './app';
// core components

import store from "./store/store";
import { Provider } from "react-redux";
import "antd/dist/antd.css";

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
