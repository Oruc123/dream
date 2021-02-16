import SearchInput from "components/elements/SearchInput";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import { FixedHeader, Logo, StyledHeader } from "./Atom";
import HeaderNav from "../HeaderNav";
const Header = () => {
  return (
    <StyledHeader>
      <div className="spacer"></div>
      <FixedHeader>
        <Grid>
          <Row between="xs" middle="xs">
            <Col>
              <Logo>Logo</Logo>
            </Col>
            <Col xs={6}>
              <SearchInput />
            </Col>
            <Col>
              <HeaderNav />
            </Col>
          </Row>
        </Grid>
      </FixedHeader>
    </StyledHeader>
  );
};
export default Header;
