import styled from "@emotion/styled";

import layout from "../../config/layout";

const { fontFamily } = layout;

const Button = styled.button(props => ({
  width: "43.5%",
  height: "40px",
  borderRadius: "5px",
  backgroundColor: "#29b6f6",
  border: "none",
  margin: "10px auto",
  display: "block",
  color: "#fff",
  letterSpacing: "1px",
  textTransform: "uppercase",
  fontWeight: "600",
  fontFamily: `${props.fontFamily}`
}));

export default Button;
