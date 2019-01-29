import styled from "@emotion/styled";

//constantes
import layout from "../../config/layout";

const { fontFamily } = layout;

const Title = styled.h1(props => ({
  fontSize: "36px",
  color: "#33333363",
  fontFamily: `${fontFamily.second}`,
  fontWeight: "400",
  marginBottom: "48px",
  letterSpacing: "2px",
  textAlign: "center",
  textTransform: "uppercase",
  lineHeight: "45px"
}));

export default Title;
