import React from 'react';
import { AppContext } from '../context';
import ComparedProduct from './ComparedProduct';

const Compare = () => {
  return (
    <AppContext.Consumer>
      {({ toCompare }) => {
        if (toCompare.length >= 2) {
          const productsToCompare = toCompare.map((product) => (
            <ComparedProduct key={product.id} product={product} />
          ));
          return (
            <div
              className="compare"
              data-testid="compare"
              style={{ transform: `translate(-50%, calc(100% - ${74 * (toCompare.length + 1)}px)` }}
            >
              <ul className="compare__row">
                <li className="compare__param compare__param--head">Produkt</li>
                <li className="compare__param compare__param--head">Cena</li>
                <li className="compare__param compare__param--head">Kolory</li>
                <li className="compare__param compare__param--head">Stan</li>
              </ul>
              {productsToCompare}
            </div>
          );
        }
        return null;
      }}
    </AppContext.Consumer>
  );
};

export default Compare;
