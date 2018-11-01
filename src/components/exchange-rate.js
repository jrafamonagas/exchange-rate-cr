/* @flow */
// $FlowFixMe
import React, { useState, useEffect, Fragment } from 'react'
import styled from 'react-emotion'
import NumberFormat from 'react-number-format'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ExchangeRateResource from '../resources/exchange-rate'
import Card from './card'
import TextField from '../components/text-field'

const CalculatorContainer = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const ExchangeButton = styled('button')`
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

const ConversionOutputContainer = styled('span')`
  font-size: 2em;
  font-weight: bold;
`

export default function ExchangeRate () {
  const buy = ExchangeRateResource.read('317')
  const sale = ExchangeRateResource.read('318')

  const [conversionValue, setConversionValue] = useState()
  const [conversionCurrency, setConversionCurrency] = useState(1)

  const isDollar = conversionCurrency === 1
  const conversionInputLabel = isDollar ? '$' : '₡'
  const conversionOutputLabel = isDollar ? '₡' : '$'
  const conversionOutput =
    (isDollar ? conversionValue * buy : conversionValue / buy) || 0

  useEffect(
    () => {
      document.title = document.title + ` | Buy: ${buy}, sale ${sale}`
    },
    [buy, sale]
  )

  const handleChange = ({ value }) => {
    setConversionValue(value === '0' ? '' : value)
  }

  const toggleConversionCurrency = () => {
    setConversionCurrency(conversionCurrency === 1 ? 2 : 1)
    setConversionValue(conversionOutput)
  }

  return (
    <Fragment>
      <Card gridArea='buy' title='Buy'>
        ₡{buy}
      </Card>

      <Card gridArea='sale' title='Sale'>
        ₡{sale}
      </Card>

      <Card gridArea='calculator' title='Calculator'>
        <CalculatorContainer>
          <NumberFormat
            thousandSeparator
            allowNegative={false}
            decimalScale={isDollar ? 2 : 0}
            customInput={TextField}
            label={conversionInputLabel}
            placeholder='0'
            value={conversionValue}
            onValueChange={handleChange}
          />
          <ExchangeButton onClick={toggleConversionCurrency}>
            <FontAwesomeIcon icon='exchange-alt' />
          </ExchangeButton>
          <NumberFormat
            thousandSeparator
            displayType='text'
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
