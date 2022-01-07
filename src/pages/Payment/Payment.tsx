import React, { ReactElement } from "react";
import Layout from "../../components/Layout/index";
import { useAppSelector } from "../../store/hooks";

interface Props {}

function Payment({}: Props): ReactElement {
  const userName = useAppSelector((state) => state.user.username);
  return (
    <Layout>
      <div className="payment">
        <div className="payment__container">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{userName}</p>
            <p>123 road</p>
            <p>random city</p>
          </div>
          <div className="payment__section">
            div.payment__title
          </div>
          <div className="payment__section"></div>
        </div>
      </div>
    </Layout>
  );
}

export default Payment;
