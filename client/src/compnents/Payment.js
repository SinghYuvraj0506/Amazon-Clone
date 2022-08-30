import React, { useState, useEffect } from "react";
import "./Payment.css";
import Header from "./Header";
import { useSelector } from "react-redux";
import BasketItem from "./BasketItem";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import NumberFormat from "react-number-format";
import axios from "./axios.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function Payment() {
  const history = useNavigate();
  const basketItem = useSelector((state) => state.basketItem);
  const user = useSelector((state) => state.user);
  const host = "http://localhost:80"

  const dispatch = useDispatch();
  const { emptytheBasket } = bindActionCreators(actionCreators, dispatch);

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();
  let total = 0;
  basketItem.basket.forEach((e) => {
    total += e.price;
  });

  useEffect(() => {
    // generate a special type of secret which allows us to charge a customer

    const getClientSecret = async () => {
      if(total>=1){
        const response = await axios({
          method: "POST",
          url: `payment/create?total=${total * 100}`, // currencies in subunit
        });
  
        setClientSecret(response.data.clientSecret);
      }
    };
    getClientSecret();
    // eslint-disable-next-line
  }, [basketItem.basket]);

  console.log("The SECRET IS ==> ", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async ({paymentIntent}) => {
        // paymentIntent = payment confirmation

        const response = await fetch("orders/addorder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },

          body: JSON.stringify({
            user_id: user.user.uid,
            basket: basketItem.basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
          }), // body data type must match "Content-Type" header
        });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        emptytheBasket();

        history("../orders", { replace: true });
      });
  };

  const handleChange = (e) => {
    // here it listen for the changes on the card element
    //and display any errors if it exists
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <>
      <Header />

      <div className="payment">
        <h1 className="payment_title">
          Checkout ({basketItem.basket.length} items)
        </h1>
        <div className="payment_container">
          <div className="payment_option">
            <h3 className="payment_option_title">Delivery Address</h3>
            <div className="payment_address">
              <p>{user.user.email.split("@")[0]},</p>
              <p>123 React Lane</p>
              <p>Govindpuri, Delhi, India</p>
            </div>
          </div>

          <div className="payment_option">
            <h3 className="payment_option_title">Review items and delivery</h3>
            <div className="payment_items">
              {basketItem.basket.map((element, index) => {
                return <BasketItem key={index} item={element} />;
              })}
            </div>
          </div>

          <div className="payment_option">
            <h3 className="payment_option_title">Payment Method</h3>
            <div className="payment_details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment-pricetotal">
                  <NumberFormat
                    renderText={(value) => <h3>Order Total: {value}</h3>}
                    decimalScale={2}
                    value={total}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>

                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
