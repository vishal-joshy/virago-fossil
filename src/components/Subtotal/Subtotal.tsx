import React, { ReactElement } from "react";
import CurrencyFormat from "./CurrencyFormat";
import "./Subtotal.css";

interface Props {}

function Subtotal({}: Props): ReactElement {
  const giftText = "This order contains a gift";
  const checkoutText = "Proceed to checkout";
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: number) => (
          <>
            <p>
              Subtotal():
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              {giftText}
            </small>
          </>
        )}
        decimalScale={2}
        prefix="$"
        suffix=""
        thousandSeperator={2}
        displayType="text"
        value={100}
      />
      <button>{checkoutText}</button>
    </div>
  );
}

export default Subtotal;
