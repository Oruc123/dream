import Avatar from "components/elements/Avatar";
import Box from "components/elements/Box";
import CustomLink from "components/elements/Link";
import React from "react";
import { CommentText, CommentWrapper } from "./Atom";
import CommentNav from "./CommentNav";

function Comment() {
  return (
    <li>
      <Box alignItems="flex-start" display="flex">
        <Avatar path="#" size={32} name="Hero" />
        <Box marginLeft={0.4}>
          <CommentWrapper>
            <CustomLink size="small" label="Oku" path="#" />
            &nbsp;
            <CommentText as="span">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum in
            </CommentText>
          </CommentWrapper>
          <CommentNav />
        </Box>
      </Box>
    </li>
  );
}

export default Comment;
