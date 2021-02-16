import styled from "styled-components";
type ISpan = {
  block?: boolean;
};
export const Span = styled.span<ISpan>`
  color: ${({ theme }) => theme.palette.medium};
  font-size: 13px;
  font-weight: 400;
  display: ${(props) => (props.block ? "block" : "inline-block")};
`;
