import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Content extends React.Component {
  render() {
    return (
      <Container>
        <Row className="align-items-center">
          <Col
            md={4}
            sm={12}
            className="text-align-center margin-top-secondary"
          >
            <h1 className="h1-masthead montserrat-bold color-very-soft-orange">
              350+
            </h1>
            <h4 className="playfairdisplay-italic color-light-75 margin-0">
              Lễ cưới hỏi
            </h4>
          </Col>
          <Col
            md={4}
            sm={12}
            className="text-align-center margin-top-secondary"
          >
            <h1 className="h1-masthead montserrat-bold color-very-soft-orange">
              250+
            </h1>
            <h4 className="playfairdisplay-italic color-light-75 margin-0">
              Lễ cầu hôn
            </h4>
          </Col>
          <Col
            md={4}
            sm={12}
            className="text-align-center margin-top-secondary"
          >
            <h1 className="h1-masthead montserrat-bold color-very-soft-orange">
              150+
            </h1>
            <h4 className="playfairdisplay-italic color-light-75 margin-0">
              Lễ tiệc khác
            </h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
