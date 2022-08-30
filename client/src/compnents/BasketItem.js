import React from "react";
import "./BasketItem.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function BasketItem(props) {
  const dispatch = useDispatch();
  const { removeFromBasket } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="basket">
      <img
        src={props.item.image}
        alt="product"
        className="basket-item-image"
      />
      <div className="basket-product-info">
        <strong>
          <p>
            {props.item.title}
          </p>
        </strong>
        <p className="basket_product_price">
            <small> ₹</small>
          <strong>
            {props.item.price}
          </strong>
        </p>
        <div className="basket_product_rating">
        {Array(props.item.rating).fill().map((i,index)=>{
                    return <span key={index}>⭐</span>
                })}
        </div>
        <div>
          {!props.hidebutton && (
            <button className="remove_from_cart" onClick={()=>{removeFromBasket(props.item.id)}}>Remove from Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
