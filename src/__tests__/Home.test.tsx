import * as React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "../components/Home/Home";

jest.mock("@okta/okta-react", () => ({
  useOktaAuth: () => ({
    authState: { isAuthenticated: true },
    authService: {},
    oktaAuth: { getUser: () => Promise.resolve("Sybil Trelawrny") },
  }),
}));

describe("home component", () => {
  test("mounts please login to screen", async () => {
    const { getByText } = render(<Router><Home /></Router>);
    /* this only tests the logged out state.
    eventually I want to test logged in and userInfo but
    I'm leaving it for now. */

    await waitFor(() => {
      expect(getByText(/please login/i)).toBeInTheDocument();
    });
  });
});
