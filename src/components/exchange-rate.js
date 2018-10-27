/* @flow */
// $FlowFixMe
import React, { useState, Fragment } from "react";
import styled from "react-emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ExchangeRateFetcher from "../api/exchange-rate-fetcher";
import Card from "./card";
import TextField from "../components/text-field";

const CalculatorContainer = styled("div")`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const ExchangeButton = styled("button")`
  background-color: none;
  border: none;
  cursor: pointer;
  margin: 0 32px;
  outline: none;
  transition: transform 0.25s ease;

  :hover {
    transform: scale(1.5);
  }
`;

const ConversionResultContainer = styled("span")`
  font-size: 2em;
  font-weight: bold;
`;

export default function ExchangeRate() {
  const buy = ExchangeRateFetcher.read("317");
  const sell = ExchangeRateFetcher.read("318");

  const [conversionValue, setConversionValue] = useState("0");
  const [conversionCurrency, setConversionCurrency] = useState(1);

  const isDollar = conversionCurrency === 1;
  const conversionInputLabel = isDollar ? "$" : "₡";
  const conversionResultLabel = isDollar ? "₡" : "$";
  const conversionResult = parseFloat(
    conversionValue > 0
      ? isDollar
        ? conversionValue * buy
        : conversionValue / buy
      : 0
  ).toFixed(2);

  const handleChange = e => {
    const { value } = e.target;
    const nextValue = parseFloat(value) || 0;
    setConversionValue(nextValue.toString());
  };

  const toggleConversionCurrency = () => {
    setConversionCurrency(conversionCurrency === 1 ? 2 : 1);
    setConversionValue(conversionValue > 0 ? conversionResult.toString() : 0);
  };

  return (
    <Fragment>
      <Card gridArea="buy" title="Buy">
        ₡{buy}
      </Card>

      <Card gridArea="sale" title="Sale">
        ₡{sell}
      </Card>

      <Card gridArea="calculator" title="Calculator">
        <CalculatorContainer>
          <TextField
            label={conversionInputLabel}
            type="number"
            value={conversionValue}
            onChange={handleChange}
          />
          <ExchangeButton onClick={toggleConversionCurrency}>
            <FontAwesomeIcon icon="exchange-alt" />
          </ExchangeButton>
          <ConversionResultContainer>
            {conversionResultLabel}
            {conversionResult}
          </ConversionResultContainer>
        </CalculatorContainer>
      </Card>
    </Fragment>
  );
}
