import Paragraph from "components/elements/Typography/Paragraph";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { StyledIconButton } from "components/elements/Buttons/Atom";
import { flex } from "myMixins";
export const CommentWrapper = styled.div`
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.palette.white.ultra};
  padding: 9px 14px;
`;

export const CommentNavWrapper = styled.div`
  padding: 9px 14px;
`;

export const CommentText = styled(Paragraph)`
  line-height: 18px;
  font-size: 13px;
`;

export const StyledCommentInput = styled(TextareaAutosize)`
  resize: none;
  box-sizing: border-box;
  appearance: none;
  overflow: hidden;
  overflow-wrap: break-word;
  min-height: 40px;
  padding: 0.5rem 1rem;
  padding-top: 10px;
  padding-bottom: 8.96px;
  font-size: 14px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.palette.breeze};
  margin: 0 0.5rem;
  border-radius: 2rem;
  display: block;
  flex: 1;
  &:focus {
    outline: none;
  }
`;

export const CommentSubmitButton = styled(StyledIconButton)`
  width: 32px;
  height: 32px;
  ${flex};
  border-radius: 50px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.white.main};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${({ theme }) => theme.palette.white.main};
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 15%), 0 1px 3px 1px rgb(0 0 0 / 5%);
    transform: translateY(-1px);
  }
  &:disabled {
    color: ${({ theme }) => theme.palette.darkest};
    background-color: ${({ theme }) => theme.palette.white.main};
    border: 1px solid ${({ theme }) => theme.palette.light};
    opacity: 0.3;
    &:hover {
      cursor: not-allowed;
      color: ${({ theme }) => theme.palette.medium};
      background-color: ${({ theme }) => theme.palette.breeze};
    }
  }
`;
