import styled from "styled-components";

export const StyledPostWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.white.main};
`;

export const StyledPostImg = styled.img`
  object-fit: cover;
  width: 100%;
  display: block;
`;
