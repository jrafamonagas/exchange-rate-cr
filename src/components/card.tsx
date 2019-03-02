import React from 'react'
import { keyframes } from '@emotion/core'

import styled from '../utils/styled'

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

interface CardBaseProps {
  gridArea: string
}

const CardBase = styled.div<CardBaseProps>`
  animation: ${appear} 1s;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.01);
  grid-area: ${props => props.gridArea};
  padding: 16px;
`

const CardTitle = styled.h1<{}>`
  color: ${props => props.theme.primary};
  margin: 0;

  &:after {
    background-color: ${props => props.theme.secondary};
    content: '';
    display: block;
    height: 1px;
    margin: 16px 0;
    width: 100%;
  }
`

interface CardProps {
  gridArea: string
  title?: string
  children: React.ReactNode
}

export default function Card({
  gridArea,
  title = '',
  children,
}: CardProps): JSX.Element {
  return (
    <CardBase gridArea={gridArea}>
      {title && <CardTitle>{title}</CardTitle>}
      {children}
    </CardBase>
  )
}
