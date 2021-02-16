import styled from "styled-components";
import { Size } from "./index";
import { flex } from "myMixins";
export const StyledLink = styled.a<{
  size: Size;
  padding: boolean;
  bold?: boolean;
}>`
  color: ${({ theme }) => theme.palette.darkest};
  padding: ${(props) => (props.padding ? "9px 14px" : 0)};
  font-size: 14px;
  font-weight: ${(props) => (props.bold ? 700 : 600)};
  ${(props) => {
    switch (props.size) {
      case "medium":
        return "font-size: 18px; ";
      case "large":
        return "font-size: 22px; ";
      default:
        return;
    }
  }}
  ${flex}

  &:hover {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export const StyledViewAllLink = styled.a`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 12px;
  font-weight: 400;
`;
