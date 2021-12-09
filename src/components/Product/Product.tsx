import React, { ReactElement } from "react";
import "./Product.css";

interface Props {
  data: {
    info: string;
    price: number;
    rating: number;
  };
}

function Product({ data }: Props): ReactElement {
  return (
    <div className="product">
      <div className="product__info">
        <p>{data.info}</p>
        <p className="product__price">{data.price}</p>
        <p className="product__rating">{Array(data.rating).fill(<p>*</p>, 0, data.rating)}</p>
      </div>
      <img src="" alt="product" />
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
