import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Tags from "./Tags";

describe("<Tags />", () => {
  test("it should mount", () => {
    render(<Tags />);

    const tags = screen.getByTestId("Tags");

    expect(tags).toBeInTheDocument();
  });
});
