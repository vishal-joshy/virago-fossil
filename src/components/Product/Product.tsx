import React, { ReactElement } from "react";
import "./Product.css";
import CurrencyFormat from "../Subtotal/CurrencyFormat";
import { useAppDispatch } from "../../store/hooks";
import { addToBasket, removeFromBasket } from "../../store/basket/basketSlice";

interface Props {
  type?: string;
  data: {
    info: string;
    price: number;
    rating: number;
  };
}

function Product({ data, type }: Props): ReactElement {
  const dispatch = useAppDispatch();
  const buttonText = type === "checkout" ? "Remove from cart" : "Add to Cart";

  let classNames: any = {
    block: "product",
    info: "product__info",
    title: "product__title",
    price: "product__price",
    rating: "product__rating",
    image: "product__image",
    button: "product__button",
  };

  if (type === "checkout") {
    classNames = {
      ...classNames,
      ...{
        block: "checkoutProduct",
        info: "checkoutProduct__info",
        title: "checkoutProduct__title",
        image: "checkoutProduct__image",
      },
    };
  }
  const addToCart = () => {
    dispatch(addToBasket(data));
  };
  const removeFromCart = () => {
    dispatch(removeFromBasket(data));
  };
  return (
    <div className={classNames.block}>
      {type === "checkout" ? <img className={classNames.image} src="" alt="product" /> : null}
      <div className={classNames.info}>
        <p className={classNames.title}>{data.info}</p>
        <p className={classNames.price}>
          <CurrencyFormat
            renderText={(value: number) => <>{value}</>}
            decimalScale={1}
            value={data.price}
            displayType=""
            prefix=""
            suffix=""
            thousandSeperator={2}
          />
        </p>
        <p className={classNames.rating}>{Array(data.rating).fill("*", 0, data.rating)}</p>
        {type === "checkout" ? (
          <button className={classNames.button} onClick={removeFromCart}>
            {buttonText}
          </button>
        ) : null}
      </div>
      {type === "checkout" ? null : (
        <>
          <img className={classNames.image} src="" alt="product" />
          <button className={classNames.button} onClick={addToCart}>
            {buttonText}
          </button>
        </>
      )}
    </div>
  );
}

export default Product;
