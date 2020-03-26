import React from 'react';
// import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { AppContext } from '../context';

const Product = ({ product }) => {
  const { id, name, img, description, price } = product;

  return (
    <AppContext.Consumer>
      {({ toCompare, addToCompare, removeFromCompare }) => {
        const productsToCompare = toCompare.filter((item) => item.id === id);
        const thumbClass = productsToCompare.length !== 0 && 'product__thumb--compare-remove';
        const removeBtn = (
          <button
            data-testid="remove-btn"
            onClick={() => removeFromCompare(id)}
            className="product__compare-btn product__compare-btn--remove"
            type="button"
          >
            Usuń
          </button>
        );
        const addBtn = (
          <button
            data-testid="compare-btn"
            onClick={() => addToCompare(product)}
            className="product__compare-btn"
            type="button"
          >
            Prównaj
          </button>
        );

        return (
          <div data-testid="product" className="col-sm-6 col-lg-4 col-xl-3">
            <div className="product">
              <div className={`product__thumb ${thumbClass}`}>
                <img src={process.env.PUBLIC_URL + img} alt={name} className="product__img" />
                {productsToCompare.length !== 0 ? removeBtn : addBtn}
              </div>
              <div className="product__text">
                <h3 className="product__title">{name}</h3>
                <p className="product__short-description">{description}</p>
                <span className="product__price">{price} zł</span>
              </div>
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

Product.propTypes = {
  product: PropTypes.shape().isRequired,
};

export default Product;
