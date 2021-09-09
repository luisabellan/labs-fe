import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router, Route, Link, Switch,
} from "react-router-dom";
import App from "./App";
import Attendance from "./components/Attendance/Attendance";

ReactDOM.render(
  <Router>
    <App />
    <Switch>
      <Route path="/attendance">
        <Attendance />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root"),
);
