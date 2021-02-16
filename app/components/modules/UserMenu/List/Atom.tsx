import styled from "styled-components";
export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 16px;
`;

export const StyledListLink = styled.a`
  padding: 9px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.darkest};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.palette.breeze};
  }
  & svg {
    margin-right: 8px;
    color: ${({ theme }) => theme.palette.medium};
  }
  & .mode {
    margin-left: auto;
  }
`;

// const StyledSwitch = <Switch />;
