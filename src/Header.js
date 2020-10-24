import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShopingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase'

function Header() {
  const handleAuthentication = () =>{
    if(user) {
      auth.signOut()
    }
  }
  const [{ basket, user }, dispatch] = useStateValue()
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://media-s3-us-east-1.ceros.com/kasasa/images/2019/11/08/27fdf5cd9a906cbbfe542b072a87416b/amazon-logo-white-1024x308.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="tex" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
      <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
          <span className="header__optionLineTwo">{
            user ? 'Sign Out': 'Sign In'
          }</span>
        </div>
      </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">Order</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShopingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.lengath}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
