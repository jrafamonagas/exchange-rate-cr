import React, { useState, useEffect, Fragment } from 'react'
import NumberFormat from 'react-number-format'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled from '../utils/styled'
import useExchangeRate from '../utils/use-exchange-rate'
import Card from './card'

const CalculatorContainer = styled.div<{}>`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const TextField = styled.input<{}>`
  background-color: transparent;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 8px;
  outline: none;
  padding: 8px;
  z-index: 2;

  &:focus {
    border-color: ${props => props.theme.primary};
  }
`

const ExchangeButton = styled.button<{}>`
  background-color: none;
  border: none;
  cursor: pointer;
  margin: 32px;
  outline: none;
  transition: transform 0.25s ease;

  :hover {
    transform: scale(1.5);
  }
`

const ConversionOutputContainer = styled.span<{}>`
  font-size: 2em;
  font-weight: bold;
`

export default function ExchangeRate(): JSX.Element {
  const buy = useExchangeRate('317')
  const sale = useExchangeRate('318')

  const [conversionValue, setConversionValue] = useState()
  const [conversionCurrency, setConversionCurrency] = useState(1)

  const isDollar = conversionCurrency === 1
  const conversionInputLabel = isDollar ? '$' : '₡'
  const conversionOutputLabel = isDollar ? '₡' : '$'
  const conversionOutput =
    (isDollar ? conversionValue * buy : conversionValue / buy) || 0

  useEffect(() => {
    document.title += ` | Buy: ${buy}, sale ${sale}`
  }, [buy, sale])

  function handleChange({ value }: { value: string }): void {
    setConversionValue(value === '0' ? '' : value)
  }

  function toggleConversionCurrency(): void {
    setConversionCurrency(conversionCurrency === 1 ? 2 : 1)
    setConversionValue(conversionOutput)
  }

  return (
    <Fragment>
      <Card gridArea="buy" title="Buy">
        ₡{buy}
      </Card>

      <Card gridArea="sale" title="Sale">
        ₡{sale}
      </Card>

      <Card gridArea="calculator" title="Calculator">
        <CalculatorContainer>
          <NumberFormat
            thousandSeparator
            allowNegative={false}
            decimalScale={isDollar ? 2 : 0}
            prefix={conversionInputLabel}
            customInput={TextField}
            placeholder={`${conversionInputLabel}0`}
            value={conversionValue}
            onValueChange={handleChange}
          />
          <ExchangeButton onClick={toggleConversionCurrency}>
            <FontAwesomeIcon icon="exchange-alt" />
          </ExchangeButton>
          <NumberFormat
            thousandSeparator
            displayType="text"
            decimalScale={!isDollar ? 2 : 0}
            prefix={conversionOutputLabel}
            value={conversionOutput}
            renderText={value => (
              <ConversionOutputContainer>{value}</ConversionOutputContainer>
            )}
          />
        </CalculatorContainer>
      </Card>
    </Fragment>
  )
}
