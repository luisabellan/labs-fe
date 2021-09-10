import React from "react";
import {
  Form, Input, Button,
} from "antd";

const FormLayoutDemo = (): JSX.Element => (
  <>
    <Form
      layout="vertical"
    >
      <Form.Item label="Form Layout" name="layout" />
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  </>
);

export default FormLayoutDemo;
