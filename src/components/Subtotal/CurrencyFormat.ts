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

const pipe =
  (...fns: any[]) =>
  (value: any) =>
    fns.reduce((acc, f) => f(acc), value);

function CurrencyFormat(data: Props) {
  const scaleDeminal = (decimalScale: number) => (value: number) => {};

  const seperateThousand = (thousandSeperator: number) => (value: string) => {};

  const addPrefix = (prefix: string) => (value: string) => prefix + value;

  const convertToText = (value: number) => value.toString();

  const addSuffix = (suffix: string) => (value: string) => value + suffix;

  return data.renderText(pipe(addPrefix(data.prefix), addSuffix(data.suffix))(data.value));
}

export default CurrencyFormat;
