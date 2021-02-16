import styled from "styled-components";

export const DropDownWrapper = styled.div`
  background: ${({ theme }) => theme.palette.white.main};
  position: absolute;
  width: 310px;
  right: -10px;
  bottom: 0;
  top: calc(100% + 10px);
  box-shadow: 0 0 5px rgb(0 0 0 / 10%);
  border-radius: ${({ theme }) => theme.borderRadius};
  border-width: 1px;
  height: auto;
  display: table;
  padding: 14px;
  &::after,
  &::before {
    content: "";
    position: absolute;
    display: block;
    border-style: solid;
    transform: translateX(-50%);
    border-color: transparent transparent
      ${({ theme }) => theme.palette.white.main};
  }

  &::before {
    right: 8px;
    width: 0;
    height: 0;
    bottom: calc(100% + 1px);
    border-color: transparent transparent ${({ theme }) => theme.palette.border};
    border-width: 8px;
  }
  &::after {
    right: 10px;
    width: 0;
    height: 0;
    bottom: 100%;
    border-width: 7px;
  }
`;
