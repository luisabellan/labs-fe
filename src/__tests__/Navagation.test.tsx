import * as React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationHeader from "../components/Navigation/Navigation";

jest.mock("@okta/okta-react", () => ({
  useOktaAuth: () => ({
    authState: { isAuthenticated: true },
    authService: {},
  }),
}));

describe("Navigation Header", () => {
  test("links are on screen", async () => {
    const { getByText } = render(<Router><NavigationHeader /></Router>);
    await waitFor(() => {
      expect(getByText(/home/i)).toBeInTheDocument();
      expect(getByText(/attendance tracker/i)).toBeInTheDocument();
      expect(getByText(/team builder/i)).toBeInTheDocument();
      expect(getByText(/learner success auditing/i)).toBeInTheDocument();
      expect(getByText(/logout/i)).toBeInTheDocument();
    });
  });
});
