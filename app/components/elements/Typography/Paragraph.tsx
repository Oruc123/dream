import styled from "styled-components";
type ISpan = {
  block?: boolean;
};
const Paragraph = styled.span<ISpan>`
  color: ${({ theme }) => theme.palette.darkest};
  font-size: 14px;
  font-weight: 400;
  display: ${(props) => (props.block ? "block" : "inline-block")};
  line-height: 21px;
`;
export default Paragraph;
