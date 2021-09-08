import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

function NavigationHeader(): any {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu mode="horizontal">
          <Menu.Item>Link 1</Menu.Item>
          <Menu.Item>Link 1</Menu.Item>
          <Menu.Item>Link 1</Menu.Item>
          <Menu.Item>Link 1</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default NavigationHeader;
