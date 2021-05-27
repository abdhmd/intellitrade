import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../components/SectionTitle";
import {featuresData} from '../data'


const Features = () => {
  return (
    <section className="section background-white" id="features">
      <Container>
        <SectionTitle
          title="Featurs"
          subtitle="Short description could go here."
        />
        <Row className="mt-5">
          {featuresData.map((item, i) => (
            <Col key={i} xs="auto" md={6} lg={4} >
              <img src={item.icon} alt={item.title} />
              <h3 className="subtitle">
                {item.title}
              </h3>
              <p className="paragraph" >
                {item.text}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
