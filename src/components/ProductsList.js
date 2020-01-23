import React from 'react';
import Product from "./Product";



const ProductsList = (props) => {

    const products = props.data.map((product) => (<Product key={product.id} product={product} toCompare={props.toCompare} add={props.add} remove={props.remove} />));

    return (
        <>
            <div className="products row mt-5 mb-5">
                {products}
            </div>
        </>
    );
}

export default ProductsList;