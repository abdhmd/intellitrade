import { Container, Row, Col } from "react-bootstrap";
import footerStyles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <section className="section">
      <Container className={footerStyles.footer}>
        <Row className={footerStyles.row}>
          <Col className={footerStyles.copy}>
            <div>
              <img src="/footer/logo.svg" alt="logo" />
              <p>&copy; 2020 Intellitrade. All rights reserved.</p>
            </div>
          </Col>
          <Col className={footerStyles.contact}>
            <div>
              <span>
                <a href="#">
                  <img src="/footer/Email.svg" alt="Email" />
                </a>
                <a href="#">
                  <img src="/footer/Twitter.svg" alt="Twitter" />
                </a>
              </span>
              <p>Disclaimer can go in here.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
