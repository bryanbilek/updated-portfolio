import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <div>
      <FooterX>Copyright © 2020 bryanbilek.com - All Rights Reserved</FooterX>
    </div>
  );
}

const FooterX = styled.footer`
  background-color: black;
  color: white;
  padding: 2%;
  margin-top: 3%;
`;
