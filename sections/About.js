import SectionTitle from "../components/SectionTitle";
import { Container, Row, Col } from "react-bootstrap";
import aboutStyles from "../styles/About.module.css";


const About = () => {
  return (
    <section className="section ">
      <Container className={aboutStyles.about}>
        <Row  xs="auto"  className={aboutStyles.row} >
          <Col className=" d-flex align-items-center justify-content-center p-0">
            <img
              src="/About/OBJECTS.png"
              alt="About image"
              width="280px"
              height="192px"
            />
          </Col>
          <Col>
            <SectionTitle title={"About Us"} />
            <p className="paragraph">
              IntelliTrade provides actionable low risk/high return trade
              signals in an easy to follow format. The research team at
              IntelliTrade uses a process that has been developed from decades
              of professional trading experience.
              <br />
              <br />
              Unlike Wall Street where the goal is to make themselves money off
              the customer’s back, there is no bullshit with IntelliTrade.
              <br />
              <br />
              We have a strict policy of not front running trades or providing
              trade signals to higher paying customers first. All customers are
              treated equal at IntelliTrade.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
