import React, { ReactElement } from "react";
import logo from "../../logo.svg";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

function Header(): ReactElement {
  const cartItems = useAppSelector((state) => state.basket.items);
  const logo = "VIRAGO";

  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">{logo}</div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__search-input" />
        <SearchIcon className="header__search-icon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__nav-option">SignIn</div>
        </Link>
        <div className="header__nav-option">Orders</div>
      </div>
      <Link to="/checkout">
        <div className="header__cart">
          <ShoppingCartIcon className="header__cart-icon" />
          <span className="header__cart-count">{cartItems.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
