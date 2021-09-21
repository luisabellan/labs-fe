import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { Form, Input, Button } from "antd";

interface LoginValues {
  username: string,
  password: string
}

const Signin = ():JSX.Element | null => {
  const { oktaAuth } = useOktaAuth();
  const [idToken, setSessionToken] = useState<unknown | null>(null);

  const handleSubmit = (values: LoginValues) => {
    const { username, password } = values;
    oktaAuth.signInWithCredentials({ username, password })
      .then((res) => {
        const { sessionToken } = res;
        setSessionToken(sessionToken);
        // sessionToken is a one-use token, so make sure this is only called once
        // oktaAuth.signInWithRedirect({ idToken });
      }).catch((err) => (err));
  };

  if (idToken) {
    return null;
  }

  return (
    <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={handleSubmit}>
      <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password" }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">Sign in</Button>
      </Form.Item>
    </Form>
  );
};

export default Signin;
