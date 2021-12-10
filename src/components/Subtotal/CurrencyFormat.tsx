import React, { ReactElement, ReactNode } from "react";

interface Props {
  decimalScale: number;
  displayType: string;
  prefix: string;
  renderText: any;
  suffix: string;
  thousandSeperator: number;
  value: number;
}

function CurrencyFormat(data: Props): ReactElement {
  return data.renderText(data.value);
}

export default CurrencyFormat;
