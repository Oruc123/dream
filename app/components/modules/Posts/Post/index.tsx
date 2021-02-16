import Box from "components/elements/Box";
import React, { useCallback, useState } from "react";
import Comments from "./Comments";
import Content from "./Content";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const Post = () => {
  const [openComments, setOpenComments] = useState<boolean>(false);
  const commentOpenClickHandler = useCallback(() => {
    setOpenComments((prevState) => !prevState);
  }, [openComments]);
  return (
    <Box border bg borderRadius as="article" marginY={1}>
      <PostHeader />
      <Content />
      <PostFooter
        openComments={openComments}
        openCommentsHandler={commentOpenClickHandler}
      />

      {openComments && <Comments />}
    </Box>
  );
};

export default Post;
