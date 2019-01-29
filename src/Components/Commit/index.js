import React from "react";
import styled from "@emotion/styled";

// config
import layout from "../../config/layout";

const { fontFamily } = layout;

const CommitWrapper = styled.div(props => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  cursor: "pointer",
  justifyContent: "space-between"
}));

const Username = styled.h1(props => ({
  fontSize: "16px",
  lineHeight: "22px",
  color: "#333333",
  fontFamily: `${fontFamily.second}`,
  fontWeight: "400",
  marginBottom: "8px",
  marginLeft: "8px",
  letterSpacing: "1px"
}));

const Message = styled.p(props => ({
  color: "#333333",
  fontFamily: `${fontFamily.primary}`,
  marginLeft: "8px",
  fontSize: "13px"
}));

const Column = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  width: props.size
}));

const Date = styled.span(props => ({
  fontFamily: `${fontFamily.second}`,
  fontSize: "13px",
  textAlign: "right",
  display: "block"
}));

const Picture = styled.img(props => ({
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "block"
}));

const CommitComponet = ({ username, message, date, img }) => (
  <CommitWrapper>
    <Column size={"10%"}>
      <Picture src={`${img}`} />
    </Column>
    <Column size={"70%"}>
      <Username> {username} </Username>
      <Message> {message} </Message>
    </Column>
    <Column size={"20%"}>
      <Date> {date} </Date>
    </Column>
  </CommitWrapper>
);

export default CommitComponet;
