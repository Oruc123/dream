import styled from "styled-components";
import { Span } from "../Typography/Span";
export const StyledIconButton = styled.button`
  color: ${({ theme }) => theme.palette.medium};
  padding: 9px 14px;
  font-size: 14px;
  font-weight: 600;
  svg {
    stroke-width: 1.5;
    font-size: 21px;
  }
  &:hover {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
export const StyledThinckButton = styled(Span)`
  display: inline-flex;
  align-items: center;
  span {
    margin-top: 2px;
    &.start-icon {
      margin-right: 0.5rem;
    }
    &.end-icon {
      margin-left: 0.5rem;
    }
  }
  &:hover,
  &:active {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export const StyledFollowDefaultButton = styled.a`
  font-size: 13px;
  padding: 0.512em 1em;
  border: 1px solid ${({ theme }) => theme.palette.light};
  border-radius: 0.4rem;
  font-weight: 500;
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${({ theme }) => theme.palette.white.main};
  &:hover {
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 15%), 0 1px 3px 1px rgb(0 0 0 / 5%);
    transform: translateY(-1px);
    color: ${({ theme }) => theme.palette.medium};
    background-color: ${({ theme }) => theme.palette.breeze};
  }
`;
export const StyledFollowPrimaryButton = styled(StyledFollowDefaultButton)`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.white.main};
`;
