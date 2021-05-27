import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../components/SectionTitle";
import faqStyles from "../styles/Faq.module.css";
import { faqData } from "../data";

const Faq = () => {
  return (
    <section className="section background-white text-center">
      <Container>
        <SectionTitle title="FAQ" subtitle="Please select a question." />
        <Row className="justify-content-center no-gutters mt-4">
          {faqData.map((item, i) => (
            <Col  xs="auto" md="6" lg="4" className={faqStyles.cols}>
              <div className={faqStyles.col}>
                <img src={item.icon} alt={item.title} />
                <p className='paragraph'>{item.title}</p>
                {item.text && <span>{item.text}</span>}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
