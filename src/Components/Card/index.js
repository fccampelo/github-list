import styled from "@emotion/styled";

import layout from "../../config/layout";

const { mediaQuery } = layout;

const Card = styled.div`
  width: 40%;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  min-height: 40px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 10px;
  text-decoration: none;
  display: ${props => (props.info ? "flex" : "block")};

  @media (max-width: ${mediaQuery.medium}) {
    width: 80%;
  }
`;

export default Card;
