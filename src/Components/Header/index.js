import React from "react";
import styled from "@emotion/styled";

const HeaderWapper = styled.header(props => ({
  width: "100%",
  height: "80px",
  backgroundColor: " #313541",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const Title = styled.h1(props => ({
  fontSize: "20px",
  letterSpacing: "0px",
  lineHeight: "20px",
  color: "#f2f4f8",
  fontFamily: "Montserrat",
  fontWeight: "400"
}));

const Icon = styled.i(props => ({
  marginRight: "10px",
  color: "#fff",
  fontSize: "18px"
}));

const Header = props => (
  <HeaderWapper>
    <Icon className="fab fa-github" />
    <Title> GitHub List </Title>
  </HeaderWapper>
);
export default Header;
