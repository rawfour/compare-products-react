import React from "react";
import { render } from "@testing-library/react";
import ProductsList from "../components/ProductsList";

const initialData = [
  {
    id: 1,
    name: "Maliny",
    img: "/img/image01.jpg",
    description: "Poprostu maliny",
    price: "2.49",
    colors: ["orange", "black"],
    fresh: false
  }
];

const toCompareInitial = [];

describe("Product list component", () => {
  it("render products", () => {
    const { getByTestId } = render(
      <ProductsList data={initialData} toCompare={toCompareInitial} />
    );
    expect(getByTestId("product")).toBeInTheDocument();
  });
});
