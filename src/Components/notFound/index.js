import React from "react";
import styled from "@emotion/styled";

import Icon from "../common/Icon";
import Column from "../common/Column";
import layout from "../../config/layout";

const { fontFamily, mediaQuery } = layout;

const DontFountWapper = styled.div`
  width: 40%;
  height: 100px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.08);
  background-color: #ff6666;
  display: flex;
  padding: 0 20px;
  margin: 20px auto;

  @media (max-width: ${mediaQuery.medium}) {
    width: 80%;
  }
`;
const Description = styled.span(props => ({
  color: "#fff",
  fontSize: "19px",
  fontFamily: `${fontFamily.second}`,
  marginLeft: "8px",
  textAlign: "center"
}));

const DontFoundComponent = props => (
  <DontFountWapper>
    <Column size={"20%"}>
      <Icon className="fas fa-times-circle" size={"50px"} />
    </Column>
    <Column size={"57%"}>
      <Description> User Not Found</Description>
    </Column>
  </DontFountWapper>
);

export default DontFoundComponent;
