import React, { ReactElement } from "react";
import Layout from "../../components/Layout/Layout";
import Product from "../../components/Product/Product";
import background from "../../assets/background.jpg";
import "./Home.css";

interface Props {}

const products = {
  row1: [
    { id: "1", info: "product1", price: 100, rating: 4 },
    { id: "2", info: "product2", price: 200, rating: 3 },
  ],
  row2: [
    { id: "1", info: "product1", price: 100, rating: 4 },
    { id: "2", info: "product2", price: 200, rating: 3 },
    { id: "3", info: "product3", price: 100, rating: 4 },
  ],
  row3: [{ id: "1", info: "product2", price: 200, rating: 3 }],
};

function Home({}: Props): ReactElement {
  return (
    <Layout>
      <div className="home">
        <div className="home__container">
          <img src={background} alt="backround" className="home__image" />
          <div className="home__row">
            {products.row1.map((product) => (
              <Product data={product} key={product.id} />
            ))}
          </div>
          <div className="home__row">
            {products.row2.map((product) => (
              <Product data={product} key={product.id} />
            ))}
          </div>
          <div className="home__row">
            {products.row3.map((product) => (
              <Product data={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
