import React, { ReactElement } from "react";
import CurrencyFormat from "./CurrencyFormat";
import "./Subtotal.css";

interface Props {
  items: number;
  total: number;
}

function Subtotal({ items, total }: Props): ReactElement {
  const giftText = "This order contains a gift";
  const checkoutText = "Proceed to checkout";
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: number) => (
          <>
            <p>
              Subtotal({items}):
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
        value={total}
      />
      <button>{checkoutText}</button>
    </div>
  );
}

export default Subtotal;
