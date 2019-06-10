import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Content extends React.Component {
  render() {
    return (
      <Container>
        <Row className="align-items-center">
          <Col
            md={3}
            sm={12}
            className="text-align-center margin-top-secondary"
          >
            <img src="/images/about us/medal.png" alt="" />
            <h5 className="montserrat-semibold color-dark-blue padding-20-10">
              Uy tín là vàng
            </h5>
            <p className="montserrat-medium color-dark-75 margin-0">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </Col>
          <Col
            md={3}
            sm={12}
            className="text-align-center margin-top-secondary"
          >
            <img src="/images/about us/idea.png" alt="" />
            <h5 className="montserrat-semibold color-dark-blue padding-20-10">
              Thiết kế độc đáo
            </h5>
            <p className="montserrat-medium color-dark-75 margin-0">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </Col>
          <Col
            md={3}
            sm={12}
            className="text-align-center margin-top-secondary"
          >
            <img src="/images/about us/career.png" alt="" />
            <h5 className="montserrat-semibold color-dark-blue padding-20-10">
              Làm việc linh hoạt
            </h5>
            <p className="montserrat-medium color-dark-75 margin-0">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </Col>
          <Col
            md={3}
            sm={12}
            className="text-align-center margin-top-secondary"
          >
            <img src="/images/about us/save-money.png" alt="" />
            <h5 className="montserrat-semibold color-dark-blue padding-20-10">
              Chi phí hợp lý
            </h5>
            <p className="montserrat-medium color-dark-75 margin-0">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
