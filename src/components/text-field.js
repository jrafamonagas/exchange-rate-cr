/* @flow */
import React from "react";
import styled from "react-emotion";

const TextFieldContainer = styled("div")`
  align-items: center;
  display: flex;
  position: relative;
`;

const TextFieldLabel = styled("label")`
  color: ${props => props.theme.primary};
  font-weight: bold;
  left: 8px;
  position: absolute;
`;

const TextFieldBase = styled("input")`
  background-color: transparent;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 8px;
  outline: none;
  padding: 8px 8px 8px 32px;
  z-index: 2;

  &:focus {
    border-color: ${props => props.theme.primary};
  }
`;

export default function TextField({ label, ...props }: { label: string }) {
  return (
    <TextFieldContainer>
      <TextFieldBase {...props} />
      <TextFieldLabel>{label}</TextFieldLabel>
    </TextFieldContainer>
  );
}
