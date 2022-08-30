import React from "react";
import "./Header.css";
import logo from "./logo.png";
import { Link,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {signOut} from "firebase/auth"
import {auth} from "./firebase"

function Header() {
  const history = useNavigate()
  const basketItem = useSelector((state) => state.basketItem);
  const user = useSelector((state) => state.user);

  const handleAuthentication = () =>{
    if(user.user){
      console.log(user.user)
      signOut(auth)
      history("/")
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="amazon_logo" />
      </Link>

      <div className="header_search">
        <input
          type="text"
          name="search"
          id="search"
          className="header_search_box"
        />
        <i className="fa-solid fa-magnifying-glass header_search_icon"></i>
      </div>

      <div className="header_nav">
        <Link to={!user.user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="option_line1">Hello {user.user?user.user.email.split("@")[0]:"Guest"}</span>
            <span className="option_line2">{user.user ?'Sign Out' :'Sign In'}</span>
          </div>
        </Link>

        <Link to={user.user?"/orders":"/login"}>
        <div className="header_option">
          <span className="option_line1">Returns</span>
          <span className="option_line2">& Orders</span>
        </div>
        </Link>

        <div className="header_option">
          <span className="option_line1">Your</span>
          <span className="option_line2">Prime</span>
        </div>
      </div>
      <Link to={user.user?"/checkout":"/login"}>
        <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="option_line2">&nbsp;{basketItem.basket.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
