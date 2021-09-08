import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router, Route, Link, Switch,
} from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root"),
);
