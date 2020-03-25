import React from "react";
import { render } from "@testing-library/react";
import Product from "../components/Product";

const initialProduct = {
  id: 1,
  name: "Maliny",
  img: "/img/image01.jpg",
  description: "Poprostu maliny",
  price: "2.49",
  colors: ["orange", "black"],
  fresh: false
};

const toCompare = [
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

const nothingToCompare = [];

describe("Product component", () => {
  it("before compare", () => {
    const { getByTestId } = render(
      <Product product={initialProduct} toCompare={nothingToCompare} />
    );
    expect(getByTestId("compare-btn")).toBeInTheDocument();
  });
  it("after compare", () => {
    const { getByTestId } = render(
      <Product product={initialProduct} toCompare={toCompare} />
    );
    expect(getByTestId("remove-btn")).toBeInTheDocument();
  });
});
