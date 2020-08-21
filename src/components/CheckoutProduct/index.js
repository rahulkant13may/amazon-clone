import React from "react";
import { useStateValue } from "../../context/StateContext";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ bakset }, dispatch] = useStateValue();
  const removeFromBasaket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(_ => (
              <span>⭐</span>
            ))}
        </p>
        <button onClick={removeFromBasaket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
