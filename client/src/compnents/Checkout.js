import React from "react";
import BasketItem from "./BasketItem";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";
import Header from "./Header";

function Checkout() {
  const basketItem = useSelector((state) => state.basketItem);
  const user = useSelector((state) => state.user);

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
            alt="advertisement"
            className="checkout_ad"
          />
          <div>
            <h2 className="checkout_pretitle">Hello, {user.user?user.user.email.split("@")[0]:"Guest"}</h2>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basketItem.basket.map((element, index) => {
              return <BasketItem key={index} item={element} />;
            })}
          </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
