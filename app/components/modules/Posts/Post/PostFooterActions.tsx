import Box from "components/elements/Box";
import PostActionButtons from "components/elements/Buttons/PostActionButtons";
import React from "react";
import { Col, Row } from "react-styled-flexboxgrid";
import { FiRepeat, FiHeart, FiMessageSquare } from "react-icons/fi";
function PostFooterActions({ isOpen }: { isOpen: boolean }) {
  return (
    <Box paddingX={1} paddingY={0.5} borderBottom={isOpen}>
      <Row center="xs">
        <Col xs={4}>
          <PostActionButtons icon={<FiHeart />} label="Like" />
        </Col>
        <Col xs={4}>
          <PostActionButtons icon={<FiMessageSquare />} label="Comment" />
        </Col>
        <Col xs={4}>
          <PostActionButtons icon={<FiRepeat />} label="Share" />
        </Col>
      </Row>
    </Box>
  );
}

export default PostFooterActions;
