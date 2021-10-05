import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import LearnerSuccess from "../components/LearnerSuccess/LearnerSuccess";

describe("Learner success dashboard", () => {
  test("it mounts the component", () => {
    const { getByText } = render(<Router><LearnerSuccess /></Router>);
    expect(getByText(/learner success auditing component/i)).toBeInTheDocument();
  });
});
