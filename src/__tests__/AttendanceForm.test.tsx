import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import AttendanceForm from "../components/Attendance/AttendanceForm";

describe("attendance form", () => {
  test("the form mounts w/ proper elements", () => {
    const { getByText } = render(<AttendanceForm />);
    expect(getByText(/meeting type/i)).toBeInTheDocument();
    expect(getByText(/select date/i)).toBeInTheDocument();
    expect(getByText(/upload attendance csv/i)).toBeInTheDocument();
  });

  test.skip("input events trigger", () => {

  });
  test.skip("state updates", () => {

  });
  test.skip("select returns date", () => {

  });
});
