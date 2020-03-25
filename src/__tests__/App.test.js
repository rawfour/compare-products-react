import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

describe("App component", () => {
  it("render product list", async () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("productsList")).toBeInTheDocument();
  });
});
