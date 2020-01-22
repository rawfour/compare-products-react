import React from 'react';



const Product = (props) => {

    const { name, img, description, price } = props.product

    return (
        <>
            <div className="col-3">
                <div className="product">
                    <img src={img} alt={name} className="produc__img" />
                    <div className="product__text">
                        <h3 className="product__title">{name}</h3>
                        <p className="product__short-description">{description}</p>
                        <span className="product__price">
                            {price}
                            <span className="product__price-amount"> zł</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;