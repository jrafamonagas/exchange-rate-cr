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
    "buy buy sale sale"
    "calculator calculator calculator calculator";
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 160px);
  margin: 24px;
  max-width: 800px;
  width: 100%;
`;

export default function Container({ children }: { children: React$Node }) {
  return (
    <ContentBase>
      <Grid>{children}</Grid>
    </ContentBase>
  );
}
