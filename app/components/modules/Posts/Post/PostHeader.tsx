import Avatar from "components/elements/Avatar";
import Box from "components/elements/Box";
import CustomLink from "components/elements/Link";
import { Span } from "components/elements/Typography/Span";
import Link from "next/link";
import { Col, Row } from "react-styled-flexboxgrid";

function PostHeader() {
  return (
    <Box as="header" paddingY={1} paddingX={1}>
      <Row>
        <Col>
          <Avatar path="#" size={40} name="Oku" />
        </Col>
        <Col>
          <CustomLink size="small" path="#" label="Oku qarabet" />
          <Span block>69 minutes ago</Span>
        </Col>
      </Row>
    </Box>
  );
}

export default PostHeader;
