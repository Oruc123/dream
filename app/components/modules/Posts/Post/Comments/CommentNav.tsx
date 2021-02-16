import { ThinkButton } from "components/elements/Buttons";
import React from "react";
import { CommentNavWrapper } from "./Atom";
import { FiHeart } from "react-icons/fi";
import { Span } from "components/elements/Typography/Span";
import Box from "components/elements/Box";
function CommentNav() {
  return (
    <CommentNavWrapper>
      <Box display="flex" justify="flex-start">
        <ThinkButton startIcon={<FiHeart />} label="Like" />
        <Span>·&nbsp;</Span>
        <Span>13 hours ago</Span> <Span>&nbsp;·</Span>
        <ThinkButton label="Reply" />
      </Box>
    </CommentNavWrapper>
  );
}

export default CommentNav;
