import React from "react";
import "./styles.css";

function RecomendationCard({ id, title, price, rating, image }) {
  return (
    <div className="recomendationCard">
      <div className="recomendationCard__icon__name">
        <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SR60,60_.png" />
        <h3>Hi, Rahul</h3>
      </div>
      <div className="recomendationCard__recomendations">
        Recomendations for you
      </div>
      <div className="recomendationCard__products">
        <div>
          <img src="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png" />
          <p>Your Orders</p>
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/172282._AC_SR120,80_.png" />
          <p>Electronics</p>
        </div>

        <div>
          <img src="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/541966._AC_SR120,80_.png" />
          <p>Computers & Accessories</p>
        </div>

        <div>
          <img src="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/2619525011._AC_SR120,80_.png" />
          <p>Home & Kitchen</p>
        </div>
      </div>
    </div>
  );
}

export default RecomendationCard;
