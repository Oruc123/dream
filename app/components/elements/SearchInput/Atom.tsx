import styled from "styled-components";
import { MdSearch } from "react-icons/md";

export const StyledInput = styled.input`
  border-width: 1px;
  color: ${({ theme: { palette } }) => palette.darkest};
  font-size: 13px;
  background: ${({ theme: { palette } }) => palette.bgBody};
  height: 32px;
  display: block;
  width: 100%;
  border-radius: 0.4em;
  padding-left: 32px;
  &::placeholder {
    color: ${({ theme: { palette } }) => palette.medium};
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0 auto;
`;

export const SearchIcon = styled(MdSearch)`
  color: ${({ theme: { palette } }) => palette.medium};
  position: absolute;
  left: 8px;
  top: 9px;
`;
