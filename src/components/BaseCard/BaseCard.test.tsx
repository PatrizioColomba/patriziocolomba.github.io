import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BaseCard from "./BaseCard";

describe("<BaseCard />", () => {
  test("it should mount", () => {
    render(<BaseCard title="test" />);

    const stackCard = screen.getByTestId("BaseCard");

    expect(stackCard).toBeInTheDocument();
  });
});
