import styled from "styled-components";
import { mediaQueries } from "myMixins";
export const StyledHeaderNav = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
  align-items: center;
  li {
    &:last-child {
      margin: 9px 14px;
      position: relative;
    }
  }
  ${mediaQueries("sm")`
    background-color: green;
  `};
`;
