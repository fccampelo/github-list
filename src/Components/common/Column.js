import styled from "@emotion/styled";

const Column = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  width: props.size ? props.size : "none",
  justifyContent: "center"
}));

export default Column;
