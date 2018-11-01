/* @flow */
import React from 'react'
import styled from 'react-emotion'
import { injectGlobal } from 'emotion'
import normalize from 'emotion-normalize'

import useTheme from '../utils/use-theme'

const ContainerBase = styled('div')`
  background-color: ${props => props.theme.secondary};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default function Container ({ children }: { children: React$Node }) {
  const theme = useTheme()

  injectGlobal`
    ${normalize};

    * {
      color: ${theme.text};
      font-family: 'Roboto', sans-serif;
    }

    a {
      color: ${theme.primary};
      text-decoration: none;
    }
  `

  return <ContainerBase>{children}</ContainerBase>
}
