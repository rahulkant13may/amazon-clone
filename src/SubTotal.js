import React from 'react';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './context/StateContext';
import "./SubTotal.css";
import { getBasketTotal } from './reducer';

function SubTotal() {
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className="subtotal">
        <CurrencyFormat 
                value={getBasketTotal(basket)} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$'} 
                renderText={value => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                            
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This order contains a gift
                        </small>

                    </>
                )} 
        />
        {/* <span> */}
            <button>Proceed to Checkout</button>    
        {/* </span> */}
        </div>
    )
}

export default SubTotal
