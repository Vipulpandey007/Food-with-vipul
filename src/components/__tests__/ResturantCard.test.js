import { render, screen } from "@testing-library/react";
import Restaurantcard from "../Restaurantcard";
import MOCK_DATA from "../mocks/resturantCard.json";
import "@testing-library/jest-dom";

it("Should render ResturantCard component with props data", () => {
  render(<Restaurantcard resData={MOCK_DATA} />);

  const name = screen.getByText("Vadilal Ice Creams");
  expect(name).toBeInTheDocument();
});
