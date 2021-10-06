import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import TeamBuilder from "../components/TeamBuilder/TeamBuilder";

describe("Learner success dashboard", () => {
  test("it mounts the component", () => {
    const { getByText } = render(<Router><TeamBuilder /></Router>);
    expect(getByText(/team builder component/i)).toBeInTheDocument();
  });
});
