import React from "react";
import "./App.css";
import {
  Route, Switch, useHistory,
} from "react-router-dom";
import { Layout } from "antd";
import { SecureRoute, Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";

//* * Component Imports **/
import NavigationHeader from "./components/Navigation/Navigation";
import Attendance from "./components/Attendance/Attendance";
import TeamBuilder from "./components/TeamBuilder/TeamBuilder";
import LearnerSuccess from "./components/LearnerSuccess/LearnerSuccess";
import GithubComponent from "./components/Github/GithubComponent";
import Home from "./components/Home/Home";
import { oktaAuthConfig } from "./oktaConfig";

const { Content } = Layout;

const oktaAuth = new OktaAuth(oktaAuthConfig);

const App = (): JSX.Element => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth: unknown, originalUri: string) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };
  return (
    <>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <NavigationHeader />
        <Layout style={{ margin: "15px", background: "#fff" }}>
          <Content>
            <Switch>
              <SecureRoute exact path="/">
                <Home />
              </SecureRoute>
              <Route path="/implicit/callback"><LoginCallback /></Route>
              <SecureRoute path="/attendance">
                <Attendance />
              </SecureRoute>
              <SecureRoute path="/teambuilder">
                <TeamBuilder />
              </SecureRoute>
              <SecureRoute path="/learnersuccess">
                <LearnerSuccess />
              </SecureRoute>
              <SecureRoute path="/githubtable">
                <GithubComponent />
              </SecureRoute>
            </Switch>
          </Content>
        </Layout>
      </Security>
    </>
  );
};

export default App;
