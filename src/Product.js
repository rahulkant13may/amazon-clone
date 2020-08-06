import React from 'react';
import "./Product.css";
import { Link } from '@material-ui/core';
import { useStateValue } from './context/StateContext';


function Product({id, title, price, rating, image}) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id,
                title,
                price,
                rating,
                image

            }
        })
    }
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
                            <span>⭐</span>
                            )
                    }
                </p>
            </div>
            {/* <div className="product__image__cart"> */}
                <img 
                    src={image}
                />
                <button onClick={addToBasket} >Add To Cart</button>
            {/* </div>  */}
        </div>
    )
}

export default Product
