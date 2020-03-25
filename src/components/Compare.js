import React from "react";
import PropTypes from "prop-types";
import ComparedProduct from "./ComparedProduct";

const Compare = ({ toCompare }) => {
  const productsToCompare = toCompare.map(product => (
    <ComparedProduct key={product.id} product={product} />
  ));

  return (
    <>
      <div className="compare">
        <ul className="compare__row">
          <li className="compare__param compare__param--head">Produkt</li>
          <li className="compare__param compare__param--head">Cena</li>
          <li className="compare__param compare__param--head">Kolory</li>
          <li className="compare__param compare__param--head">Stan</li>
        </ul>
        {productsToCompare}
      </div>
    </>
  );
};

Compare.propTypes = {
  toCompare: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default Compare;
