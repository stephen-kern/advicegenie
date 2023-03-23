import React from "react";
import { render } from "@testing-library/react";
import Advice from "..";

describe("Advice Component", () => {
  it("should render without errors", () => {
    const { getByTestId } = render(<Advice />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const adviceLayout = getByTestId("advice-layout");
    expect(adviceLayout).toBeInTheDocument();
  });
});
