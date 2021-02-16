import styled from "styled-components";
const headerHeight = "64px";
export const StyledHeader = styled.header`
  background: ${({ theme: { palette } }) => palette.bgBody};
  & > .spacer {
    height: ${headerHeight};
  }
`;
export const FixedHeader = styled.div`
  position: fixed;
  height: ${headerHeight};
  width: 100%;
  left: 0;
  top: 0;
  border-bottom-width: 1px;
  background: ${({ theme: { palette } }) => palette.white.main};
  display: flex;
  align-items: center;
`;
export const Logo = styled.h1`
  color: ${({ theme: { palette } }) => palette.darkest};
  font-size: 16px;
`;
