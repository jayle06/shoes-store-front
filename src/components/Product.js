import React from 'react'
import '../css/Product.css';

function Product(props) {
    return (
        <div className="product">
            <img src={props.image} alt="product"/>
            <div className="product__info">
                <p>{props.title}</p>
                <p className="product__price">
                    <strong>{props.price}</strong>
                    <small>vnd</small>
                </p>
                <div className="product__rating">
                    {Array(props.rating)
                        .fill()
                        .map((_)=> (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
