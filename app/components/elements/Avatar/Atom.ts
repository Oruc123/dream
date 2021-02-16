import styled from "styled-components";
import { flex } from "myMixins";
export const StyledAvatar = styled.div<{ size }>`
  font-size: 24px;
  color: ${({ theme }) => theme.palette.avatar.text};
  background: ${({ theme }) => theme.palette.avatar.bg};
  font-size: 17px;
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  padding: 0;
  cursor: pointer;
  img {
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  ${flex}
`;
