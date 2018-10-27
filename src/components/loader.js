/* @flow */
import React, { Fragment } from "react";
import Skeleton from "react-skeleton-loader";

import Card from "./card";
import useTheme from "../utils/use-theme";

export default function Loader() {
  const { secondary: color } = useTheme();

  return (
    <Fragment>
      <Placeholder gridArea="purchase" color={color} />
      <Placeholder gridArea="sale" color={color} />
      <Placeholder gridArea="calculator" color={color} />
    </Fragment>
  );
}

function Placeholder({ gridArea, color }: { gridArea: string, color: string }) {
  return (
    <Card gridArea={gridArea}>
      <h1>
        <Skeleton color={color} widthRandomness={0} />
      </h1>
      <p>
        <Skeleton color={color} widthRandomness={0} />
      </p>
    </Card>
  );
}
