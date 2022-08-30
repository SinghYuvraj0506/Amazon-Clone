import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import "./Product.css";
import { actionCreators } from "../state/index";

function Product(props) {
  
  const dispatch = useDispatch();
  const { itemToBasket } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleClick = () => { 
    itemToBasket(props.id,props.title,props.image,props.price,props.rating);
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{props.title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>  
        <div className="product_rating">
          {Array(props.rating)
            .fill()
            .map((i,index) => {
              return <span key={index}>⭐</span>;
            })}
        </div>
      </div>
      <img src={props.image} alt="product" className="product_image" />
      <button className="add_to_cart" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
