import React from "react";
import { Table } from "antd";

import { columns, data } from "./TableDummyData";

function GithubComponent(): JSX.Element {
  return (
    <Table columns={columns} dataSource={data} />
  );
}

export default GithubComponent;
