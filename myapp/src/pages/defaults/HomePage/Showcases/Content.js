import React from "react";
import { Tab, Container, Row, Col, Nav } from "react-bootstrap";

class Content extends React.Component {
  render() {
    return (
      <Tab.Container defaultActiveKey="second">
        <Nav
          className="align-items-center justify-content-center"
          variant="pills"
        >
          <Nav.Item>
            <Nav.Link
              className="h5-masthead montserrat-medium color-dark-75"
              eventKey="first"
            >
              Lễ dạm ngõ
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="h5-masthead montserrat-medium color-dark-75"
              eventKey="second"
            >
              Lễ ăn hỏi
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="h5-masthead montserrat-medium color-dark-75"
              eventKey="third"
            >
              Lễ cưới
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="first" />
          <Tab.Pane eventKey="second">
            <Container>
              <Row className="align-items-start margin-top-secondary">
                <Col md={4} sm={12}>
                  <a href="LongGiang.html">
                    <div className="img-showcases-container">
                      <img
                        className="img img-showcases img-fluid"
                        alt="Showcases"
                        src="./images/showcases/showcase (1).png"
                      />
                      <div className="overlay-showcases">
                        <div className="text-showcases">
                          <p className="montserrat-extrabold">Lễ ăn hỏi</p>
                          <h5 className="playfairdisplay-bolditalic">
                            Long & Giang
                          </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Col>
                <Col md={4} sm={12}>
                  <a href="LongGiang.html">
                    <div className="img-showcases-container items-margin-top-20">
                      <img
                        className="img img-showcases img-fluid"
                        alt="Showcases"
                        src="./images/showcases/showcase (2).png"
                      />
                      <div className="overlay-showcases">
                        <div className="text-showcases">
                          <p className="montserrat-extrabold">Lễ ăn hỏi</p>
                          <h5 className="playfairdisplay-bolditalic">
                            Long & Giang
                          </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Col>
                <Col md={4} sm={12}>
                  <a href="LongGiang.html">
                    <div className="img-showcases-container items-margin-top-20">
                      <img
                        className="img img-showcases img-fluid"
                        alt="Showcases"
                        src="./images/showcases/showcase (3).png"
                      />
                      <div className="overlay-showcases">
                        <div className="text-showcases">
                          <p className="montserrat-extrabold">Lễ ăn hỏi</p>
                          <h5 className="playfairdisplay-bolditalic">
                            Long & Giang
                          </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Col>
              </Row>
              <Row className="align-items-start row-margin-top-30 hide">
                <Col md={4} sm={12}>
                  <a href="LongGiang.html">
                    <div className="img-showcases-container items-margin-top-20">
                      <img
                        className="img img-showcases img-fluid"
                        alt="Showcases"
                        src="./images/showcases/showcase (4).png"
                      />
                      <div className="overlay-showcases">
                        <div className="text-showcases">
                          <p className="montserrat-extrabold">Lễ ăn hỏi</p>
                          <h5 className="playfairdisplay-bolditalic">
                            Long & Giang
                          </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Col>
                <Col md={4} sm={12}>
                  <a href="LongGiang.html">
                    <div className="img-showcases-container items-margin-top-20">
                      <img
                        className="img img-showcases img-fluid"
                        alt="Showcases"
                        src="./images/showcases/showcase (5).png"
                      />
                      <div className="overlay-showcases">
                        <div className="text-showcases">
                          <p className="montserrat-extrabold">Lễ ăn hỏi</p>
                          <h5 className="playfairdisplay-bolditalic">
                            Long & Giang
                          </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Col>
                <Col md={4} sm={12}>
                  <a href="LongGiang.html">
                    <div className="img-showcases-container items-margin-top-20">
                      <img
                        className="img img-showcases img-fluid"
                        alt="Showcases"
                        src="./images/showcases/showcase (6).png"
                      />
                      <div className="overlay-showcases">
                        <div className="text-showcases">
                          <p className="montserrat-extrabold">Lễ ăn hỏi</p>
                          <h5 className="playfairdisplay-bolditalic">
                            Long & Giang
                          </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Col>
              </Row>
            </Container>
          </Tab.Pane>
          <Tab.Pane eventKey="third" />
        </Tab.Content>
        <a
          className="btn btn-masthead btn-bd-primary btn-lg montserrat-semibold color-light margin-top-tertiary"
          href="Thư viện ảnh.html"
          role="button"
        >
          Xem thêm
        </a>
      </Tab.Container>
    );
  }
}

export default Content;
