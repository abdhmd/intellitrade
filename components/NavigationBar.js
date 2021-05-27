import { Container, Row, Col } from "react-bootstrap";
import navStyles from "../styles/Nav.module.css";

const NavigationBar = () => {
  return (
    <Container className="d-flex justify-content-between align-items-center py-3 mb-5">
      <Row
        className=" w-100 mx-auto justify-content-between align-items-center"
        xs={6}
        lg={4}
      >
        <Col className="text-left p-0 ">
          <img src="/Hero/logo.svg" alt="logo" width="140px" height="20px" />
        </Col>
        <Col lg={6} className={navStyles.menu}>
          <div className={navStyles.links}>
            <a href="#hero">Home</a>
            <a href="#about">About Us</a>
            <a href="#features">Features</a>
            <a href="#faq">FAQ</a>
          </div>
        </Col>
        <Col className="text-right w-100  p-0">
          <div className={navStyles.sign}>
            <span>
              Sign in
              <img src="/Hero/Path.svg" alt="Arrow" />
            </span>
            <span>
              <img src="/Hero/Shape.svg" alt="user" />
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NavigationBar;
