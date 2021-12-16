import React, { ReactElement } from "react";
import logo from "../../logo.svg";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { auth } from "../../firebase/firebaseConfig";

function Header(): ReactElement {
  const cartItems = useAppSelector((state) => state.basket.items);
  const userName = useAppSelector((state) => state.user.username);
  const logo = "VIRAGO";
  const staticText = {
    signOut: "SignOut",
    signIn: "SignIn",
    orders: "Orders",
    greeting: "Hello,",
  };
  const handleSignOut = () => {
    auth.signOut();
  };

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
        {userName ? (
          <>
            <div className="header__nav-option">{staticText.greeting + userName}</div>
            <div className="header__nav-option" onClick={handleSignOut}>
              {staticText.signOut}
            </div>
          </>
        ) : (
          <Link to="/login">
            <div className="header__nav-option">{staticText.signIn}</div>
          </Link>
        )}

        <div className="header__nav-option">{staticText.orders}</div>
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
