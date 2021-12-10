import React, { ReactElement } from "react";
import Layout from "../../components/Layout";
import Subtotal from "../../components/Subtotal/Subtotal";
import "./Checkout.css";

interface Props {}

function Checkout({}: Props): ReactElement {
  const shoppingBasket = "Your shopping basket";
  return (
    <Layout>
      <div className="checkout">
        <div className="checkout__left">
          <img src="" alt="banner" className="checkout__banner" />
          <div>
            <h2 className="checkout__title">{shoppingBasket}</h2>
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
