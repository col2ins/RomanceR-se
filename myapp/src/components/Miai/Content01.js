import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const EmbedsPage = () => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        title="Embeds Page"
        className="embed-responsive-item"
        src="https://www.youtube.com/embed/iBi7KBQaEes"
      />
    </div>
  );
};

class Content01 extends React.Component {
  render() {
    return (
      <Container>
        <Row className="margin-top-secondary">
          <Col md={12} sm={12} xs={12}>
            <EmbedsPage />
          </Col>
        </Row>
        <Row className="margin-top-secondary">
          <Col md={12} sm={12}>
            <p
              className="montserrat-medium color-dark-75"
              style={{ textAlign: "left" }}
            >
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
              <br />
              <br /> Class aptent taciti sociosqu ad litora torquent per Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Class aptent
              taciti sociosqu ad litora torquent.
            </p>
          </Col>
        </Row>
        <Row className="margin-top-secondary">
          <Col md={6} sm={12}>
            <img
              className="img img-fluid img-services"
              src="./images/services/miai/miai (1).jpg"
              alt=""
            />
          </Col>
          <Col
            md={6}
            sm={12}
            style={{ textAlign: "left" }}
            className="items-margin-top-20"
          >
            <h5 className="h5-masthead montserrat-extrabold color-dark-blue">
              Sính lễ
            </h5>
            <p className="montserrat-medium color-dark-75">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </Col>
        </Row>
        <Row className="margin-top-secondary">
          <Col
            md={6}
            sm={12}
            style={{ textAlign: "left" }}
            className="items-margin-top-20"
          >
            <h5 className="h5-masthead montserrat-extrabold color-dark-blue">
              Thành phần tham dự
            </h5>
            <p className="montserrat-medium color-dark-75">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <img
              className="img img-fluid img-services"
              src="./images/services/miai/miai (2).jpg"
              alt=""
            />
          </Col>
        </Row>
        <Row className="margin-top-secondary">
          <Col md={6} sm={12}>
            <img
              className="img img-fluid img-services"
              src="./images/services/miai/miai (3).jpg"
              alt=""
            />
          </Col>
          <Col
            md={6}
            sm={12}
            style={{ textAlign: "left" }}
            className="items-margin-top-20"
          >
            <h5 className="h5-masthead montserrat-extrabold color-dark-blue">
              Trình tự buổi lễ
            </h5>
            <p className="montserrat-medium color-dark-75">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content01;
