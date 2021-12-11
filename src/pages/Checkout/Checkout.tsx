import React, { ReactElement } from "react";
import Layout from "../../components/Layout";
import Subtotal from "../../components/Subtotal/Subtotal";
import "./Checkout.css";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import Product from "../../components/Product/Product";

interface Props {}

function Checkout({}: Props): ReactElement {
  const products = useAppSelector((state) => state.basket.items);
  const shoppingBasket = "Your shopping basket";
  const findTotalAmount = (products: any[]) =>
    products.reduce((acc, product) => acc + product.price, 0);
  return (
    <Layout>
      <div className="checkout">
        <div className="checkout__left">
          <img src="" alt="banner" className="checkout__banner" />
          <div>
            <h2 className="checkout__title">{shoppingBasket}</h2>
            {products.map((product: any) => (
              <Product data={product} type="checkout"></Product>
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal items={products.length} total={findTotalAmount(products)} />
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
