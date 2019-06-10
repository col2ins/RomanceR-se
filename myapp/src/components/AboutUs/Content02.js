import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Content02 extends React.Component {
  render() {
    return (
      <div className="row-masthead">
        <Col
          lg={6}
          sm={12}
          className="img-bg-about-us-01 jumbotron-masthead jumbotron-fluid"
        >
          <Container className="opacity-0">
            <Row>
              <Container>
                <Col md={12} sm={12}>
                  <h5 className="h5-masthead montserrat-extrabold color-dark-blue">
                    02
                  </h5>
                  <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
                    Sứ mệnh
                  </h2>
                  <p className="montserrat-medium color-dark-75">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. <br /><br />
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Class aptent taciti sociosqu
                    ad litora torquent per{" "}
                  </p>
                </Col>
              </Container>
            </Row>
          </Container>
        </Col>

        <Col
          lg={6}
          sm={12}
          className="jumbotron-masthead jumbotron-fluid bg-very-soft-orange-12-5"
        >
          <Container>
            <Row>
              <Container>
                <Col md={12} sm={12} className="text-align-left">
                  <h5 className="h5-masthead montserrat-extrabold color-dark-blue">
                    02
                  </h5>
                  <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
                    Sứ mệnh
                  </h2>
                  <p className="montserrat-medium color-dark-75">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. <br /><br />
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Class aptent taciti sociosqu
                    ad litora torquent per{" "}
                  </p>
                </Col>
              </Container>
            </Row>
          </Container>
        </Col>
      </div>
    );
  }
}

export default Content02;
