import React, { ReactElement } from "react";
import "./Product.css";
import CurrencyFormat from "../Subtotal/CurrencyFormat";
import { useAppDispatch } from "../../store/hooks";
import { removeFromBasket } from "../../store/basket/basketSlice";
import { product } from "./Product";

interface Props {
  data: product;
}

function CheckoutProduct({ data }: Props): ReactElement {
  const dispatch = useAppDispatch();
  const buttonText = "Remove from cart";

  const removeFromCart = () => {
    dispatch(removeFromBasket(data));
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src="" alt="product" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{data.info}</p>
        <p className="product__price">
          <CurrencyFormat
            renderText={(value: number) => <>{value}</>}
            decimalScale={1}
            value={data.price}
            displayType=""
            prefix="$"
            suffix="/-"
            thousandSeperator={2}
          />
        </p>
        <p className="product__rating">{Array(data.rating).fill("*", 0, data.rating)}</p>
        <button className="product__button" onClick={removeFromCart}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
