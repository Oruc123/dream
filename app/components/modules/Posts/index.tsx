import { Col, Grid, Row } from "react-styled-flexboxgrid";
import Box from "components/elements/Box";
import PostsSideBar from "./PostsSideBar";
import Post from "./Post";

function Posts() {
  return (
    <Box>
      <Grid>
        <Row start="xs">
          <Col xs md={4} lg={3}>
            <PostsSideBar />
          </Col>
          <Col md={8} lg={6}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </Col>
        </Row>
      </Grid>
    </Box>
  );
}

export default Posts;
