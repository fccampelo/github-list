import React from "react";
import styled from "@emotion/styled";

import layout from "../../config/layout";

const { fontFamily } = layout;

const FooterWrapper = styled.footer(props => ({
  height: "80px",
  backgroundColor: " #313541",
  display: "flex",
  alignItems: "center",
  paddingLeft: "20px",
  fontFamily: `${fontFamily.second}`
}));

const Text = styled.span(props => ({
  margin: "0 auto",
  color: "#fff",
  fontSize: "13px"
}));

const Icon = styled.i(props => ({
  color: "#ff6666"
}));

const Footer = props => (
  <FooterWrapper>
    <Text>
      Made with <Icon> ♥ </Icon> by Felipe Campelo
    </Text>
  </FooterWrapper>
);

export default Footer;
