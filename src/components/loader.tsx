import React, { Fragment } from 'react'
import Skeleton from 'react-skeleton-loader'

import useTheme from '../utils/use-theme'
import Card from './card'

export default function Loader(): JSX.Element {
  const { secondary: color } = useTheme()

  return (
    <Fragment>
      <Placeholder gridArea="buy" color={color} />
      <Placeholder gridArea="sale" color={color} />
      <Placeholder gridArea="calculator" color={color} />
    </Fragment>
  )
}

interface PlaceholderProps {
  gridArea: string
  color: string
}

function Placeholder({ gridArea, color }: PlaceholderProps): JSX.Element {
  return (
    <Card gridArea={gridArea}>
      <h1>
        <Skeleton color={color} widthRandomness={0} />
      </h1>
      <p>
        <Skeleton color={color} widthRandomness={0} />
      </p>
    </Card>
  )
}
