import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import FoGithubComponenturthComponent from "../components/Github/GithubComponent";

describe("Learner success dashboard", () => {
  test("it mounts the component", () => {
    const { getByText } = render(<Router><GithubComponent /></Router>);
    expect(getByText(/this is a stub for a 4th expected functionality for labby2.0 - implementing for route configuration/i)).toBeInTheDocument();
  });
});
