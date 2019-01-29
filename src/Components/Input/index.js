import React from "react";
import styled from "@emotion/styled";

import layout from "../../config/layout";

const { fontFamily } = layout;

const InputWrapper = styled.div(props => ({
  position: "relative"
}));

const InputField = styled.input(props => ({
  width: "100%",
  height: "33px",
  backgroundColor: "rgba(255,188,53,0)",
  border: "1px solid  #e9e9e9",
  textAlign: "center",
  fontFamily: `${fontFamily.primary}`,
  letterSpacing: "1px"
}));

const Icon = styled.i(props => ({
  position: "absolute",
  right: "8px",
  color: "#606060",
  top: "12px"
}));

const Input = ({ ...props }) => (
  <InputWrapper>
    <InputField {...props} />
    <Icon className="fas fa-search" />
  </InputWrapper>
);

export default Input;
