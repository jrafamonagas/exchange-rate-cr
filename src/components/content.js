/* @flow */
import React from "react";
import styled from "react-emotion";

const ContentBase = styled("div")`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Grid = styled("div")`
  display: grid;
  grid-gap: 24px;
  grid-template-areas:
    "buy"
    "sale"
    "calculator";
  margin: 24px;
  max-width: 800px;
  width: 100%;

  @media (min-width: 600px) {
    grid-template-areas:
      "buy buy sale sale"
      "calculator calculator calculator calculator";
  }
`;

export default function Container({ children }: { children: React$Node }) {
  return (
    <ContentBase>
      <Grid>{children}</Grid>
    </ContentBase>
  );
}
