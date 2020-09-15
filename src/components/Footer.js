import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <div>
      <Footer>Copyright © 2020 bryanbilek.com - All Rights Reserved</Footer>
    </div>
  );
}

const Footer = styled.footer`
  background-color: black;
  color: white;
  padding: 2%;
  margin-top: 3%;
`;
