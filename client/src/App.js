import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compnents/Home";
import Checkout from "./compnents/Checkout";
import Login from "./compnents/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./compnents/firebase";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import {useEffect} from 'react'
import Payment from "./compnents/Payment";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from "./compnents/Orders";

const promise = loadStripe("pk_test_51LGs7JSB9J5x5daOAEGNZYUAiPI0ryt6NmemuspLoxPLOTQLuVxZKZh85QAzk0Cp8nKjRcoNBvAkmU9lQXkD6MkC00LIAn7OQ6")

function App() {
  const dispatch = useDispatch();
  const { user } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    onAuthStateChanged(auth, (currentuser) => {
      console.log(currentuser);
      if(currentuser){
        user(currentuser);
      }
      else{
        user(null)
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
