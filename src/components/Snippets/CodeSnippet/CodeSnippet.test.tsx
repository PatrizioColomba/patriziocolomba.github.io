import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CodeSnippet from "./CodeSnippet";

describe("<CodeSnippet />", () => {
  test("it should mount", () => {
    render(<CodeSnippet text={""} lang={"kotlin"} />);

    const codeSnippet = screen.getByTestId("CodeSnippet");

    expect(codeSnippet).toBeInTheDocument();
  });
});
