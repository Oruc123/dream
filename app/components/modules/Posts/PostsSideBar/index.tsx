import Avatar from "components/elements/Avatar";
import CustomLink from "components/elements/Link";
import React from "react";
import { Col, Row } from "react-styled-flexboxgrid";
import { FiSettings } from "react-icons/fi";
import { Span } from "components/elements/Typography/Span";
import Sugested from "components/modules/Sugested";
import UserLogin from "components/modules/UserLogin";
const PostsSideBar = () => {
  return (
    <div>
      <Row>
        <Col>
          <Avatar path="#" size={56} name="oku" img />
        </Col>
        <Col xs>
          <UserLogin />
        </Col>
        <Col>
          <CustomLink label={<FiSettings />} path="/settings" />
        </Col>
        <Col xs={12}></Col>
        <Col style={{ marginTop: 16 }}>
          <CustomLink bold size="large" path="#" label="0" />
          <Span block>Followers</Span>
        </Col>
        <Col style={{ marginTop: 16 }}>
          <CustomLink bold size="large" path="#" label="78" />
          <Span block>Following</Span>
        </Col>
      </Row>
      <Sugested />
      <Sugested />
    </div>
  );
};

export default PostsSideBar;
