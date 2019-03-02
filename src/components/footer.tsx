import React from 'react'
import styled from '../utils/styled'

const FooterBase = styled.div<{}>`
  background-color: #fff;
  padding: 32px;
`

const CenteredText = styled.p<{}>`
  text-align: center;
`

export default function Footer(): JSX.Element {
  return (
    <FooterBase>
      <CenteredText>
        Created by{' '}
        <a
          href="https://kevinwolf.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kevin Wolf
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/kevinwolfcr/exchange-rate-cr"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </CenteredText>
      <CenteredText>
        Exchange rates provided by{' '}
        <a
          href="https://www.bccr.fi.cr/SitePages/default.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Banco Central de Costa Rica
        </a>
      </CenteredText>
    </FooterBase>
  )
}
