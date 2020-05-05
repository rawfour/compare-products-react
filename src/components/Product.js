import React, { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import { AppContext } from '../context';

const Product = ({ product }) => {
  const [loaded, setLoaded] = useState(false);

  const { id, name, img, description, price } = product;

  const onImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <AppContext.Consumer>
      {({ toCompare, addToCompare, removeFromCompare }) => {
        const productsToCompare = toCompare.filter((item) => item.id === id);
        const isCompare = productsToCompare.length !== 0 ? 'product__thumb--compare-remove' : '';
        const isLoaded = !loaded ? 'product--loading' : '';
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
            <div className={`product ${isLoaded}`}>
              <div className={`product__thumb ${isCompare} ${isLoaded}`}>
                <img src={img} alt={name} onLoad={onImageLoaded} className="product__img" />
                {loaded ? (
                  <>{productsToCompare.length !== 0 ? removeBtn : addBtn}</>
                ) : (
                  <CircularProgress />
                )}
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
