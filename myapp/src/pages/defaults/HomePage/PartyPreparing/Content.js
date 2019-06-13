import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Content extends React.Component {
  render() {
    return (
      <div className="row-masthead">
        <Col
          lg={6}
          sm={12}
          className="img-bg-party-preparing jumbotron-masthead jumbotron-fluid"
        >
          <Container className="opacity-0">
            <Row>
              <Container>
                <Col md={12} sm={12}>
                  <h5 className="h5-masthead montserrat-extrabold color-dark-blue">
                    Lễ thành hôn
                  </h5>
                  <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
                    Minh Duy & Ngọc Quyên
                  </h2>
                  <p className="montserrat-medium color-dark-75">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos.
                  </p>
                  {/* <h4 className="h4-masthead playfairdisplay-italic color-dark margin-top-tertiary">Chúc mừng hạnh
                              phúc!</h4> */}
                </Col>
              </Container>
            </Row>
            <Row className="margin-top-tertiary">
              <Container>
                <Col md={12} sm={12}>
                  <div
                    id="clockdiv"
                    className="h4 margin-0 playfairdisplay-italic color-dark"
                  >
                    <Col sm={3}>
                      <div className="bd-primary">
                        <span
                          id="days"
                          className="h2 montserrat-semibold color-dark-blue"
                        />
                        <div className="p playfairdisplay-italic color-dark-75">
                          Ngày
                        </div>
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="bd-primary">
                        <span
                          id="hours"
                          className="h2 montserrat-semibold color-dark-blue"
                        />
                        <div className="p playfairdisplay-italic color-dark-75">
                          Giờ
                        </div>
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="bd-primary">
                        <span
                          id="minutes"
                          className="h2 montserrat-semibold color-dark-blue"
                        />
                        <div className="p playfairdisplay-italic color-dark-75">
                          Phút
                        </div>
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="bd-primary">
                        <span
                          id="seconds"
                          className="h2 montserrat-semibold color-dark-blue"
                        />
                        <div className="p playfairdisplay-italic color-dark-75">
                          Giây
                        </div>
                      </div>
                    </Col>
                  </div>
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
                    Lễ thành hôn
                  </h5>
                  <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
                    Minh Duy & Ngọc Quyên
                  </h2>
                  <p className="montserrat-medium color-dark-75">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos
                    himenaeos.
                  </p>
                  {/* <h4 className="h4-masthead playfairdisplay-italic color-dark margin-top-tertiary">Chúc mừng hạnh
                                phúc!</h4> */}
                </Col>
              </Container>
            </Row>
            <Row className="margin-top-tertiary">
              <Container>
                <Col md={12} sm={12}>
                  <div
                    id="clockdiv"
                    className="h4 margin-0 playfairdisplay-italic color-dark"
                  >
                    <Col sm={3}>
                      <div className="bd-primary">
                        <span
                          id="days"
                          className="h2 montserrat-semibold color-dark-blue"
                        />
                        <div className="p playfairdisplay-italic color-dark-75">
                          Ngày
                        </div>
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="bd-primary">
                        <span
                          id="hours"
                          className="h2 montserrat-semibold color-dark-blue"
                        />
                        <div className="p playfairdisplay-italic color-dark-75">
                          Giờ
                        </div>
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="bd-primary">
                        <span
                          id="minutes"
                          className="h2 montserrat-semibold color-dark-blue"
                        />
                        <div className="p playfairdisplay-italic color-dark-75">
                          Phút
                        </div>
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="bd-primary">
                        <span
                          id="seconds"
                          className="h2 montserrat-semibold color-dark-blue"
                        />
                        <div className="p playfairdisplay-italic color-dark-75">
                          Giây
                        </div>
                      </div>
                    </Col>
                  </div>
                </Col>
              </Container>
            </Row>
          </Container>
        </Col>
      </div>
    );
  }
}

export default Content;
