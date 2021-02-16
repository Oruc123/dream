import Box from "components/elements/Box";
import { ThinkButton } from "components/elements/Buttons";
import { Span } from "components/elements/Typography/Span";
import { Col, Row } from "react-styled-flexboxgrid";
import PostFooterActions from "./PostFooterActions";
interface IPostFooter {
  openComments: boolean;
  openCommentsHandler: () => void;
}
function PostFooter<IPostFooter>({ openComments, openCommentsHandler }) {
  return (
    <footer>
      <Box paddingX={1} paddingY={0.5} borderBottom>
        <Row between="xs">
          <Col>
            <Span> 255 likes</Span>
          </Col>
          <Col>
            <ThinkButton handleClik={openCommentsHandler} label="12 comments" />
            <Span>12 shares</Span>
          </Col>
        </Row>
      </Box>
      <PostFooterActions isOpen={true} />
    </footer>
  );
}

export default PostFooter;
