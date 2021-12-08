import React, { ReactElement } from "react";
import logo from "../../logo.svg";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header(): ReactElement {
  const logo = "VIRAGO";

  return (
    <div className="header">
      <div className="header__logo">{logo}</div>
      <div className="header__search">
        <input type="text" className="header__search-input" />
        <SearchIcon className="header__search-icon" />
      </div>
      <div className="header__nav">
        <div className="header__nav-option">SignIn</div>
        <div className="header__nav-option">Orders</div>
      </div>
      <div className="header__cart">
        <ShoppingCartIcon className="header__cart-icon" />
        <span className="header__cart-count">10</span>
      </div>
    </div>
  );
}

export default Header;
