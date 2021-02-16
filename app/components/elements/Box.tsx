import styled from "styled-components";

type IBox = {
  marginX?: number;
  marginY?: number;
  display?: string;
  alignItems?: string;
  justify?: string;
  padding?: number;
  paddingX?: number;
  paddingY?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  border?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
  borderRadius?: boolean;
  bg?: boolean;
  width?: string;
};

const Box = styled.div<IBox>`
  flex: 1;
  background-color: ${({ theme, bg }) =>
    bg ? theme.palette.white.main : "transparent"};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius ? theme.borderRadius : 0};
  border-top-width: ${({ borderTop }) => (borderTop ? "1px" : 0)};
  border-bottom-width: ${({ borderBottom }) => (borderBottom ? "1px" : 0)};
  border-left-width: ${({ borderLeft }) => (borderLeft ? "1px" : 0)};
  border-right-width: ${({ borderRight }) => (borderRight ? "1px" : 0)};
  ${({ border }) => (border ? "border-width: 1px" : null)};
  display: ${({ display = "block" }) => display};
  align-items: ${({ alignItems = "center" }) => alignItems};
  padding: ${({ paddingY = 0 }) => paddingY}rem
    ${({ paddingX = 0 }) => paddingX}rem;
  justify-content: ${({ justify = "space-between" }) => justify};

  margin: ${({ marginY = 0 }) => marginY}rem ${({ marginX = 0 }) => marginX}rem;

  margin-bottom: ${({ marginBottom, marginY = 0 }) =>
    marginBottom ? marginBottom : marginY}rem;

  margin-top: ${({ marginTop, marginY = 0 }) =>
    marginTop ? marginTop : marginY}rem;
  margin-left: ${({ marginLeft, marginX = 0 }) =>
    marginLeft ? marginLeft : marginX}rem;
  margin-right: ${({ marginRight, marginX = 0 }) =>
    marginRight ? marginRight : marginX}rem;

  ${(props) => {
    if (props.width) {
      return `width: ${props.width}`;
    }
  }}
`;
export default Box;
