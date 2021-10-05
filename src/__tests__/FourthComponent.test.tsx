import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import FourthComponent from "../components/FourthComponent/FourthComponent";

describe("Learner success dashboard", () => {
  test("it mounts the component", () => {
    const { getByText } = render(<Router><FourthComponent /></Router>);
    expect(getByText(/this is a stub for a 4th expected functionality for labby2.0 - implementing for route configuration/i)).toBeInTheDocument();
  });
});
