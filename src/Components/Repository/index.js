import React from "react";
import styled from "@emotion/styled";

// configurações de layout
import layout from "../../config/layout";
import Badge from "../common/Badge";

const { fontFamily } = layout;

const RepositoryWrapper = styled.div(props => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  cursor: "pointer",
  position: "relative"
}));

const RepositoryCollum = styled.div(props => ({
  display: "flex",
  flexDirection: "column"
}));

const Title = styled.h1(props => ({
  fontSize: "16px",
  lineHeight: "22px",
  color: "#333333",
  fontFamily: `${fontFamily.second}`,
  fontWeight: "400",
  marginBottom: "8px",
  marginLeft: "8px",
  textTransform: "capitalize",
  letterSpacing: "1px",
  width: "70%"
}));

const Description = styled.p(props => ({
  fontSize: "13px",
  color: "#333333",
  fontFamily: `${fontFamily.primary}`,
  marginLeft: "8px",
  lineHeight: "16px"
}));

const Repository = ({ name, description, commitStatus }) => (
  <RepositoryWrapper>
    <Badge
      statusColor={commitStatus.color}
      description={commitStatus.message}
    />
    <RepositoryCollum>
      <Title> {name} </Title>
      <Description>
        {description ? description : "this component has no description"}
      </Description>
    </RepositoryCollum>
  </RepositoryWrapper>
);

export default Repository;
