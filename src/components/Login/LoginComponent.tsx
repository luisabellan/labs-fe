import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";

const Signin = ():JSX.Element | null => {
  const { oktaAuth } = useOktaAuth();
  const [idToken, setSessionToken] = useState<unknown | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    oktaAuth.signInWithCredentials({ username, password })
      .then((res) => {
        const { sessionToken } = res;
        setSessionToken(sessionToken);
        // sessionToken is a one-use token, so make sure this is only called once
        oktaAuth.signInWithRedirect({ idToken });
      })
      .catch((err) => ("Found an error", err));
  };
  const handleUsernameChange = (e: React.SyntheticEvent) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.SyntheticEvent) => {
    setPassword(e.target.value);
  };
  if (idToken) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <input id="submit" type="submit" value="Submit" />
    </form>
  );
};

export default Signin;
