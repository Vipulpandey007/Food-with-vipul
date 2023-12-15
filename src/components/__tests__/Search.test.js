import { render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";

it("Should render body component", () => {
  render(<Body />);
  const Search = screen.getByRole();
  expect(Search).toBeInTheDocument();
});
