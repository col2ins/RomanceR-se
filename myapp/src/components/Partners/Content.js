import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Content extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={2} xs={4}>
            <img className="img img-fluid img-partners" src="./images/partners/partner (1).png" alt="" />
          </Col>
          <Col sm={2} xs={4}>
            <img className="img img-fluid img-partners" src="./images/partners/partner (2).png" alt="" />
          </Col>
          <Col sm={2} xs={4}>
            <img className="img img-fluid img-partners" src="./images/partners/partner (3).png" alt="" />
          </Col>
          <Col sm={2} xs={4}>
            <img className="img img-fluid img-partners" src="./images/partners/partner (4).png" alt="" />
          </Col>
          <Col sm={2} xs={4}>
            <img className="img img-fluid img-partners" src="./images/partners/partner (5).png" alt="" />
          </Col>
          <Col sm={2} xs={4}>
            <img className="img img-fluid img-partners" src="./images/partners/partner (6).png" alt="" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
