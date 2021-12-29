import React from "react";

import Logo from "../../images/compasso-logo-color.png";

import { FooterStyle, Icon } from "./style";

const Footer = () => (
  <FooterStyle>
    <Icon src={Logo} />
    Compasso UOL - Blog by Matheus Durão.
  </FooterStyle>
);

export default Footer;
