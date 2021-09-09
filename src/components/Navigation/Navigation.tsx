import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

function NavigationHeader(): any {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu mode="horizontal">
          <Menu.Item><Link to="/attendance">Attendance Tracker</Link></Menu.Item>
          <Menu.Item>Link 1</Menu.Item>
          <Menu.Item>Link 1</Menu.Item>
          <Menu.Item>Link 1</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default NavigationHeader;
