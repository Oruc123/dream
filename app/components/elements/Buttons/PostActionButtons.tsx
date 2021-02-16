import { flex } from "myMixins";
import styled from "styled-components";

interface IButton {
  label: string | React.ReactNode;
  handleClik?: () => void;
  icon: React.ReactNode;
}
const StyledButton = styled.button`
  ${flex};
  font-weight: 600;
  width: 100%;
  padding: 0.5rem;
  color: ${({ theme }) => theme.palette.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  svg {
    margin-right: 0.5rem;
    margin-top: 3px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.breeze};
  }
`;
function PostActionButtons({ label, handleClik, icon }: IButton) {
  return (
    <StyledButton onClick={handleClik}>
      {icon}
      {label}
    </StyledButton>
  );
}

export default PostActionButtons;
