import * as React from "react";
import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const { Header } = Layout;

function NavigationHeader(): JSX.Element {
  const { oktaAuth, authState } = useOktaAuth();

  const login = () => oktaAuth.signInWithRedirect();
  const logout = () => oktaAuth.signOut();

  return (
    <Layout className="layout">
      <Header style={{ padding: 0 }}>
        <Menu mode="horizontal" theme="light">
          <Menu.Item key="homelink">
            <Link to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="attendancelink">
            <Link to="/attendance">
              Attendance Tracker
            </Link>
          </Menu.Item>
          <Menu.Item key="teambuilderlink">
            <Link to="/teambuilder">
              Team Builder
            </Link>
          </Menu.Item>
          <Menu.Item key="learnersuccesslink">
            <Link to="/learnersuccess">
              Learner Success Auditing
            </Link>
          </Menu.Item>
          <Menu.Item key="loginoutbutton">
            {authState && !authState.isAuthenticated ? (
              <Button onClick={login}>
                Login
              </Button>
            ) : (
              <Button onClick={logout}>
                Logout
              </Button>
            ) }
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default NavigationHeader;
