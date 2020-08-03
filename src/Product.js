import React from 'react';
import "./Product.css";
import { Link } from '@material-ui/core';

function Product({title, price, rating, image}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>
                    {title}
                </p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => 
                            <p>⭐</p>
                            )
                    }
                </p>
            </div>
            {/* <div className="product__image__cart"> */}
                <img 
                    src={image}
                />
                <button>Add To Cart</button>
            {/* </div>  */}
        </div>
    )
}

export default Product
