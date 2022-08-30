import React from "react";
import "./Orderpage.css";
import moment from "moment";
import BasketItem from "./BasketItem";
import CurrencyFormat from "react-currency-format";

function Orderpage(props) {
  return (
    <div className="order_page">
      <h2 className="order_title">Order</h2>
      <p>
        {moment.unix(props.order_data.created).format("MMMM Do YYYY, h:mma")}
      </p>
      <p className="order_id">
        <small>{props.order_data._id}</small>
      </p>
      {props.order_data.basket?.map((item, index) => {
        return <BasketItem item={item} hidebutton={true}/>;
      })}
      <div className="order_total">

      <CurrencyFormat
        renderText={(value) => <h3>Order Total: {value}</h3>}
        decimalScale={2}
        value={props.order_data.amount/100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      </div>
    </div>
  );
}

export default Orderpage;
