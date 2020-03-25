import React from "react";
import PropTypes from "prop-types";

const Product = ({ product, toCompare, add, remove }) => {
  const { id, name, img, description, price } = product;
  const productsToCompare = toCompare.filter(product => product.id === id);
  const thumbClass =
    productsToCompare.length !== 0 && "product__thumb--compare-remove";
  const removeBtn = (
    <button
      data-testid="remove-btn"
      onClick={() => remove(id)}
      className="product__compare-btn product__compare-btn--remove"
    >
      Usuń
    </button>
  );
  const addBtn = (
    <button
      data-testid="compare-btn"
      onClick={() => add(product)}
      className="product__compare-btn"
    >
      Prównaj
    </button>
  );
  return (
    <>
      <div data-testid="product" className="col-sm-6 col-lg-4 col-xl-3">
        <div className="product">
          <div className={`product__thumb ${thumbClass}`}>
            <img
              src={process.env.PUBLIC_URL + img}
              alt={name}
              className="produc__img"
            />
            {productsToCompare.length !== 0 ? removeBtn : addBtn}
          </div>
          <div className="product__text">
            <h3 className="product__title">{name}</h3>
            <p className="product__short-description">{description}</p>
            <span className="product__price">{price} zł</span>
          </div>
        </div>
      </div>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.shape().isRequired,
  toCompare: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  add: PropTypes.func,
  remove: PropTypes.func
};

Product.defaultProps = {
  add: null,
  remove: null
};

export default Product;
