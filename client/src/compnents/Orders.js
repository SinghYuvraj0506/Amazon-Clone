import React , {useState,useEffect} from 'react'
import Header from './Header'
import Orderpage from './Orderpage'
import { useSelector } from "react-redux";
import "./Orders.css"


function Orders() {
  const [orders, setOrders] = useState([])
  const user = useSelector((state) => state.user);

  const host = "http://localhost:80"

  useEffect(() => {
    const getorder = async () =>{
      const response = await fetch("/orders/getorder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },

          body: JSON.stringify({
            user_id: user.user.uid
          }), // body data type must match "Content-Type" header
        });
        const data = await response.json()
        setOrders(data)

    }
    return async()=>{
      getorder()
    }
  
  }, [user])
  
  

  
  return (
    <>
    <Header/>
    <div className="orders">
      <h1 className="orders_title">Your Orders</h1>
      <div className="orders_container">
        {orders.map((order,index)=>{
          return <Orderpage key={index} order_data={order}/>
        })}
      </div>
      
    </div>
    </>
  )
}

export default Orders