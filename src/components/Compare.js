import React from 'react';
import ComparedProduct from "./ComparedProduct";

const Compare = (props) => {

    const productsToCompare = props.toCompare.map((product) => (<ComparedProduct key={product.id} product={product} />));

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
}

export default Compare;
