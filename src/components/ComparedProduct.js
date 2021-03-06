import React from 'react';
import PropTypes from 'prop-types';

const ComparedProduct = ({ product }) => {
  const { name, img, price, colors, fresh } = product;
  const renderColors = colors.map((color) => (
    <div key={color} className="compare__single-color" style={{ backgroundColor: color }} />
  ));

  const freshClass = fresh
    ? 'compare__param compare__param-condition compare__param-condition--fresh'
    : 'compare__param compare__param-condition compare__param-condition--frozen';
  const renderCondition = fresh ? 'Świerze' : 'Mrożone';

  return (
    <>
      <ul className="compare__row">
        <li className="compare__param compare__param--name">
          <img src={img} alt="" className="compare__img" />
          <span className="compare__text">{name}</span>
        </li>
        <li className="compare__param compare__param--price">{price} zł</li>
        <li className="compare__param compare__param--color">{renderColors}</li>
        <li className={freshClass}>{renderCondition}</li>
      </ul>
    </>
  );
};

ComparedProduct.propTypes = {
  product: PropTypes.shape().isRequired,
};

export default ComparedProduct;
