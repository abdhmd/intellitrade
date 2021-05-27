import NavigationBar from "../components/NavigationBar";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroStyles from "../styles/Hero.module.css";
const Hero = () => {
  return (
    <section className={heroStyles.hero} id="hero">
      <NavigationBar />
      <Container>
        <Row className={heroStyles.row}>
          <Col className="  w-100 h-100 d-flex justify-content-center align-items-center">
            <img src="Hero/phone.png" alt="image" widht="365" height="365" />
          </Col>
          <Col>
            <h1 className="headline text-white">
              A short slogan or title can go here.
            </h1>
            <p className="paragraph text-white">
              Some short description or selling point can go here. The
              description you sent me was pretty long but I think we can put it
              somewhere else where it’ll look better on the website.
            </p>
            <Button className="button">Start Your Free Month</Button>
            <p>30 day free trial then $19.99 per month.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
