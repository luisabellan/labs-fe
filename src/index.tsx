import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router, Route, Link, Switch,
} from "react-router-dom";
import App from "./App";
import Attendance from "./components/Attendance/Attendance";
import TeamBuilder from "./components/TeamBuilder/TeamBuilder";
import LearnerSuccess from "./components/LearnerSuccess/LearnerSuccess";
import FourthComponent from "./components/FourthComponent/FourthComponent";

ReactDOM.render(
  <Router>
    <App />
    <Switch>
      <Route path="/attendance">
        <Attendance />
      </Route>
      <Route path="/teambuilder">
        <TeamBuilder />
      </Route>
      <Route path="/learnersuccess">
        <LearnerSuccess />
      </Route>
      <Route path="/fourth">
        <FourthComponent />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root"),
);
