import React from 'react';



const Product = (props) => {



    const { id, name, img, description, price } = props.product
    const toCompare = props.toCompare.filter(product => product.id === id)

    const thumbClass = toCompare.length !== 0 ? "product__thumb product__thumb--compare-remove" : "product__thumb"
    const removeBtn = <button onClick={() => props.remove(id)} className="product__compare-btn product__compare-btn--remove">Usuń</button>;
    const addBtn = <button onClick={() => props.add(props.product)} className="product__compare-btn">Prównaj</button>;

    return (
        <>
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="product">
                    <div className={thumbClass}>
                        <img src={process.env.PUBLIC_URL + img} alt={name} className="produc__img" />
                        {toCompare.length !== 0 ? removeBtn : addBtn}
                    </div>
                    <div className="product__text">
                        <h3 className="product__title">{name}</h3>
                        <p className="product__short-description">{description}</p>
                        <span className="product__price">
                            {price} zł
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;