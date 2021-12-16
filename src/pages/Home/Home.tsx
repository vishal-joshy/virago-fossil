import React, { ReactElement } from "react";
import Layout from "../../components/Layout";
import Product from "../../components/Product/Product";
import background from "../../assets/background.jpg";
import "./Home.css";

const products = {
  row1: [
    { id: 1, info: "product1", price: 100, rating: 4 },
    { id: 2, info: "product2", price: 200, rating: 3 },
  ],
  row2: [
    { id: 3, info: "product1", price: 100, rating: 4 },
    { id: 4, info: "product2", price: 200, rating: 3 },
    { id: 5, info: "product3", price: 100, rating: 4 },
],
  row3: [{ id: 6, info: "product2", price: 200, rating: 3 }],
};

function Home(): ReactElement {
  return (
    <Layout>
      <div className="home">
        <div className="home__container">
          <img src={background} alt="backround" className="home__image" />
          <div className="home__row">
            {products.row1.map((product, index) => (
              <Product data={product} key={index} />
            ))}
          </div>
          <div className="home__row">
            {products.row2.map((product, index) => (
              <Product data={product} key={index} />
            ))}
          </div>
          <div className="home__row">
            {products.row3.map((product, index) => (
              <Product data={product} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
