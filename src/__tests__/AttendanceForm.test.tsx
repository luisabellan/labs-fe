import * as React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import AttendanceForm from "../components/Attendance/AttendanceForm";

describe("attendance form", () => {
  test("the form mounts w/ proper elements", () => {
    const { getByText } = render(<Router><AttendanceForm /></Router>);
    expect(getByText(/meeting type/i)).toBeInTheDocument();
    expect(getByText(/select date/i)).toBeInTheDocument();
    expect(getByText(/upload attendance csv/i)).toBeInTheDocument();
  });

  test("select menu events trigger", async () => {
    const { queryAllByText, container } = render(<Router><AttendanceForm /></Router>);
    expect(queryAllByText("Stakeholder Meeting").length).toBe(1);
    expect(queryAllByText("Product Review").length).toBe(0);
    const select = container.querySelector(".ant-select-selector");
    fireEvent.mouseDown(select);
    await waitFor(() => {
      expect(queryAllByText("Product Review").length).toBe(1);
    });
  });
});
