import Avatar from "components/elements/Avatar";
import React from "react";
import { Col, Row } from "react-styled-flexboxgrid";
import CustomLink from "components/elements/Link";
import { Span } from "components/elements/Typography/Span";
import Box from "components/elements/Box";
import { FollowButton } from "components/elements/Buttons";
const AccauntFollow = () => {
  return (
    <li style={{ marginBottom: "1rem" }}>
      <Row middle="xs">
        <Col>
          <Avatar path="#" size={60} name="Okku qarabey" />
        </Col>
        <Col>
          <CustomLink path="#" label="Okku" />
          <Box marginY={0.25}>
            <Span>12.5k folowers</Span>
          </Box>
        </Col>
        <Col style={{ marginLeft: "auto" }}>
          <FollowButton variant="default" label="Follow" />
        </Col>
      </Row>
    </li>
  );
};

export default AccauntFollow;
