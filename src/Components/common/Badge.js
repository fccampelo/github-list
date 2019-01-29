import React from "react";
import styled from "@emotion/styled";

const BadgeWrapper = styled.div(props => ({
  minWidth: "70px",
  height: "20px",
  borderRadius: "13px",
  backgroundColor: props.color ? props.color : props.statusColor,
  position: "absolute",
  right: 0,
  color: "#fff",
  fontSize: "13px",
  textAlign: "center"
}));

const Description = styled.span(props => ({
  margin: "2px 9px",
  display: "block"
}));

const Badge = ({ description, statusColor }) => (
  <BadgeWrapper statusColor={statusColor}>
    <Description> {description} </Description>
  </BadgeWrapper>
);

export default Badge;
