import React from 'react';
import { AppContext } from '../context';
import Product from './Product';

const ProductsList = () => {
  return (
    <AppContext.Consumer>
      {({ data }) => {
        const products = data.map((product) => <Product key={product.id} product={product} />);
        return (
          <div data-testid="productsList" className="products row mt-5 mb-5">
            {products}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default ProductsList;
