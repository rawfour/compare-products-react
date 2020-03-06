import React from 'react';

const ComparedProduct = (props) => {

    let { name, img, price, colors, fresh } = props.product
    colors = colors.map((color, index) => <div key={index} className="compare__single-color" style={{ backgroundColor: color }}></div>)

    const freshClass = fresh ? "compare__param compare__param-condition compare__param-condition--fresh" : "compare__param compare__param-condition compare__param-condition--frozen"
    fresh = fresh ? "Świerze" : "Mrożone"


    return (
        <>
            <ul className="compare__row">
                <li className="compare__param compare__param--name">
                    <img src={process.env.PUBLIC_URL + img} alt="" className="compare__img" />
                    <span className="compare__text">{name}</span>
                </li>
                <li className="compare__param compare__param--price">{price} zł</li>
                <li className="compare__param compare__param--color">{colors}</li>
                <li className={freshClass}>{fresh}</li>
            </ul>
        </>
    );
}

export default ComparedProduct;