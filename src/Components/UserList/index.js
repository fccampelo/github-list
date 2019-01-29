import React from "react";
import styled from "@emotion/styled";

import layout from "../../config/layout";

const { fontFamily } = layout;

const UserWrapper = styled.div(props => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  cursor: "pointer"
}));

const Description = styled.p(props => ({
  fontSize: "13px",
  color: "#333333",
  fontFamily: `${fontFamily.primary}`,
  marginLeft: "8px"
}));

const Title = styled.h1(props => ({
  fontSize: "16px",
  lineHeight: "22px",
  color: "#333333",
  fontFamily: `${fontFamily.second}`,
  fontWeight: "400",
  marginBottom: "8px",
  marginLeft: "8px"
}));

const InfoUser = styled.section(props => ({
  display: "flex",
  flexDirection: "column",
  width: "71%",
  position: "relative"
}));

const PictureSection = styled.section(props => ({
  width: "20%",
  display: "block"
}));

const Picture = styled.img(props => ({
  margin: "auto",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  display: "block"
}));

const Id = styled.span(props => ({
  fontSize: "11px",
  letterSpacing: "1px"
}));

const Badge = styled.div(props => ({
  width: "70px",
  height: "20px",
  borderRadius: "13px",
  backgroundColor: "#ffbc34",
  position: "absolute",
  right: "-30px",
  color: "#fff",
  textAlign: "center",
  marginTop: "5px"
}));

const UserList = ({ name, img, bio, location, id }) => {
  return (
    <UserWrapper>
      <PictureSection>
        <Picture src={`${img}`} />
      </PictureSection>
      <InfoUser>
        <Badge>
          <Id> {id} </Id>
        </Badge>
        <Title> {name} </Title>
        <Description>{bio} </Description>
        <Description>{location} </Description>
      </InfoUser>
    </UserWrapper>
  );
};

export default UserList;
