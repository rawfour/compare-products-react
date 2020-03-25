import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const ProductsList = ({ data, toCompare, add, remove }) => {
  const products = data.map(product => (
    <Product
      key={product.id}
      product={product}
      toCompare={toCompare}
      add={add}
      remove={remove}
    />
  ));
  return (
    <>
      <div data-testid="productsList" className="products row mt-5 mb-5">
        {products}
      </div>
    </>
  );
};

ProductsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  toCompare: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  add: PropTypes.func,
  remove: PropTypes.func
};

ProductsList.defaultProps = {
  add: null,
  remove: null
};

export default ProductsList;
