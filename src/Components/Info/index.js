import React from "react";
import styled from "@emotion/styled";

import layout from "../../config/layout";

const { fontFamily } = layout;

const InfoWrapper = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  textAlign: "center"
}));

const Description = styled.span(props => ({
  fontFamily: `${fontFamily.primary}`,
  fontSize: "14px",
  letterSpacing: "1px",
  marginTop: "8px",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "#afb2b4"
}));

const Title = styled.h1(props => ({
  fontFamily: `${fontFamily.second}`,
  fontSize: "50px",
  color: "#d7d8d9"
}));

const Info = ({ description, value }) => (
  <InfoWrapper>
    <Title> {value} </Title>
    <Description> {description} </Description>
  </InfoWrapper>
);

export default Info;
