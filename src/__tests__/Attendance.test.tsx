import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Attendance from "../components/Attendance/Attendance";

describe("Attendance Form Wrapper", () => {
  test("renders the title and form", () => {
    const { getByText } = render(<Attendance />);
    expect(getByText(/attendance component/i)).toBeInTheDocument();
  });
});
