import styled from "@emotion/styled";

//constantes
import layout from "../../config/layout";

const { colors } = layout;

const Wrapper = styled.section(props => ({
  minHeight: "100vh",
  backgroundColor: `${colors.base}`,
  padding: "50px 40px"
}));

export default Wrapper;
