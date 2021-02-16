import Avatar from "components/elements/Avatar";
import Box from "components/elements/Box";
import { CommentSubmitButton, StyledCommentInput } from "./Atom";
import { FiArrowRight } from "react-icons/fi";
function UserComment() {
  return (
    <Box marginTop={1} alignItems="flex-start" display="flex">
      <Avatar size={32} name="Oku" path="#" />
      <StyledCommentInput placeholder="Write your comment" />
      <CommentSubmitButton disabled>
        <span>
          <FiArrowRight />
        </span>
      </CommentSubmitButton>
    </Box>
  );
}

export default UserComment;
