import React from 'react'
import { useStateValue } from './context/StateContext';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";

function Checkout() {
    const [{basket}] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://m.media-amazon.com/images/G/31/shazam/970x250-1-4EpV8._V408428785_.jpg"/>
                {
                    basket && basket.length == 0 
                    ?
                    <div>
                        <h2>Your shopping cart is empty</h2>
                        <p>You have no items in your basket. To buy one or more items, click "Add to Cart" next to your item.</p>
                    </div>
                    :
                    <div>
                        <h2 className="checkout__heading">  Shopping Cart </h2>
                        {
                            basket.map(item => (
                                <CheckoutProduct 
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        rating={item.rating}
                                        image={item.image}/>
                                )

                            )
                        }
                    </div>
                    }
            </div>
            <div className="checkout__right">
                    <SubTotal/>
            </div>


            </div>
    )
}

export default Checkout
