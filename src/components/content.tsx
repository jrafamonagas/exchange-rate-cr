import React from 'react'
import styled from '../utils/styled'

const ContentBase = styled.div<{}>`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const Grid = styled.div<{}>`
  display: grid;
  grid-gap: 24px;
  grid-template-areas:
    'buy'
    'sale'
    'calculator';
  margin: 24px;
  max-width: 800px;
  width: 100%;

  @media (min-width: 600px) {
    grid-template-areas:
      'buy buy sale sale'
      'calculator calculator calculator calculator';
  }
`

interface ContainerProps {
  children: React.ReactNode
}

export default function Content({ children }: ContainerProps): JSX.Element {
  return (
    <ContentBase>
      <Grid>{children}</Grid>
    </ContentBase>
  )
}
