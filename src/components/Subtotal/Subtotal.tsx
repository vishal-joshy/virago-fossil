import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "./CurrencyFormat";
import "./Subtotal.css";

interface Props {
  items: number;
  total: number;
}

function Subtotal({ items, total }: Props): ReactElement {
  const navigate = useNavigate();
  const giftText = "This order contains a gift";
  const checkoutText = "Proceed to checkout";
  const redirectToPayment = () => {
    navigate("/payment");
  };
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
      <button onClick={redirectToPayment}>{checkoutText}</button>
    </div>
  );
}

export default Subtotal;
