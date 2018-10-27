/* @flow */
import React from "react";
import styled from "react-emotion";

const FooterBase = styled("div")`
  background-color: #fff;
  padding: 32px;
`;

export default function Footer() {
  return (
    <FooterBase>
      <p align="center">
        Created by{" "}
        <a
          href="https://kevinwolf.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kevin Wolf
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/kevinwolfcr/exchange-rate-cr"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
      <p align="center">
        Exchange rates provided by{" "}
        <a
          href="https://www.bccr.fi.cr/SitePages/default.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Banco Central de Costa Rica
        </a>
      </p>
    </FooterBase>
  );
}
