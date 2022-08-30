import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import CurrencyFormat from "react-currency-format"
import "./Subtotal.css"

function Subtotal() {
  const history = useNavigate()
  const basketItem = useSelector(state => state.basketItem)
  let total = 0
  basketItem.basket.forEach((e)=>{
    total += e.price
  })


  return (
    <div className="subtotal">
  <CurrencyFormat
    renderText={(value)=>(
    <>
        <p>
          Subtotal ({basketItem.basket.length} items) :<strong>{value}</strong>
        </p>
        <small className="subtotal_gift">
          <input type="checkbox"/>This order
          contains a gift
        </small>
    </>
    )}
    decimalScale={2}
    value={total}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"₹"}
    />

    <button onClick={()=>{history("/payment")}}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal