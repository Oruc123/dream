import Box from "components/elements/Box";
import Ul from "components/elements/Ul";
import Comment from "./Comment";
import UserComment from "./UserComment";
function Comments() {
  return (
    <Box paddingY={1} paddingX={1}>
      <Ul>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Ul>
      <UserComment />
    </Box>
  );
}

export default Comments;
