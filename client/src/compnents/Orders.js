import React , {useState,useEffect} from 'react'
import Header from './Header'
import Orderpage from './Orderpage'
import { useSelector } from "react-redux";
import "./Orders.css"
import {host} from "../config/config"


function Orders() {
  const [orders, setOrders] = useState([])
  const user = useSelector((state) => state.user);

  const getorder = async () =>{
    const response = await fetch(host.length !==0 ? `${host}/orders/getorder` : "orders/getorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },

        body: JSON.stringify({
          user_id: user?.user?.uid
        }), // body data type must match "Content-Type" header
      });
      const data = await response.json()
      setOrders(data.orders)

  }

  useEffect(() => {
    getorder()
  // eslint-disable-next-line
  }, [user])
  
  
  
  return (
    <>
    <Header/>
    <div className="orders">
      <h1 className="orders_title">Your Orders</h1>
      <div className="orders_container">
        {orders?.length !==0 ? orders?.map((order,index)=>{
          return <Orderpage key={index} order_data={order}/>
        }): <div align="center" style={{marginTop:"30px",fontSize:"20px",fontWeight:"500"}}>No Orders to display</div>}
      </div>
      
    </div>
    </>
  )
}

export default Orders