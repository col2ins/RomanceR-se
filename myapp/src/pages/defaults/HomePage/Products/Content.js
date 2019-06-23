import React from "react";
import { Tab, Container, Row, Col, Nav } from "react-bootstrap";

class Content extends React.Component {
  render() {
    return (
      <Tab.Container defaultActiveKey="first">
        <Nav
          className="align-items-center justify-content-center"
          variant="pills"
        >
          <Nav.Item>
            <Nav.Link
              className="h5-masthead montserrat-medium color-dark-75"
              eventKey="first"
            >
              Hoa cưới
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="h5-masthead montserrat-medium color-dark-75"
              eventKey="second"
            >
              Phụ kiện trang trí
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <Container>
              <Row className="margin-top-secondary">
                <Col md={3} sm={6} xs={6}>
                  <div className="img-showcases-container items-margin-top-20">
                    <img
                      className="img img-showcases img-fluid"
                      alt="Products"
                      src="./images/products/products (1).png"
                    />
                    <a
                      className="text-showcases-2"
                      role="button"
                      href="Hoa cầm tay 01.html"
                    >
                      <p className="montserrat-medium">
                        <span className="dripicons-basket margin-right-10" />
                        Mua ngay
                      </p>
                    </a>
                  </div>
                  <div className=" margin-top-4th">
                    <h5 className="h5-masthead montserrat-semibold">
                      <a className="product01" href="Hoa cầm tay 01.html">
                        Hoa cầm tay 01
                      </a>
                    </h5>
                    <p className="montserrat-medium color-dark-75">
                      350.000 VNĐ
                    </p>
                  </div>
                </Col>
                <Col md={3} sm={6} xs={6}>
                  <div className="img-showcases-container items-margin-top-20">
                    <img
                      className="img img-showcases img-fluid"
                      alt="Products"
                      src="./images/products/products (2).png"
                    />
                    <a
                      className="text-showcases-2"
                      role="button"
                      href="Hoa cầm tay 01.html"
                    >
                      <p className="montserrat-medium">
                        <span className="dripicons-basket margin-right-10" />
                        Mua ngay
                      </p>
                    </a>
                  </div>
                  <div className=" margin-top-4th">
                    <h5 className="h5-masthead montserrat-semibold">
                      <a className="product01" href="Hoa cầm tay 01.html">
                        Hoa cầm tay 01
                      </a>
                    </h5>
                    <p className="montserrat-medium color-dark-75">
                      350.000 VNĐ
                    </p>
                  </div>
                </Col>
                <Col md={3} sm={6} xs={6} className="items-margin-top-20">
                  <div className="img-showcases-container items-margin-top-20">
                    <img
                      className="img img-showcases img-fluid"
                      alt="Products"
                      src="./images/products/products (3).png"
                    />
                    <a
                      className="text-showcases-2"
                      role="button"
                      href="Hoa cầm tay 01.html"
                    >
                      <p className="montserrat-medium">
                        <span className="dripicons-basket margin-right-10" />
                        Mua ngay
                      </p>
                    </a>
                  </div>
                  <div className=" margin-top-4th">
                    <h5 className="h5-masthead montserrat-semibold">
                      <a className="product01" href="Hoa cầm tay 01.html">
                        Hoa cầm tay 01
                      </a>
                    </h5>
                    <p className="montserrat-medium color-dark-75">
                      350.000 VNĐ
                    </p>
                  </div>
                </Col>
                <Col md={3} sm={6} xs={6} className="items-margin-top-20">
                  <div className="img-showcases-container items-margin-top-20">
                    <img
                      className="img img-showcases img-fluid"
                      alt="Products"
                      src="./images/products/products (4).png"
                    />
                    <a
                      className="text-showcases-2"
                      role="button"
                      href="Hoa cầm tay 01.html"
                    >
                      <p className="montserrat-medium">
                        <span className="dripicons-basket margin-right-10" />
                        Mua ngay
                      </p>
                    </a>
                  </div>
                  <div className=" margin-top-4th">
                    <h5 className="h5-masthead montserrat-semibold">
                      <a className="product01" href="Hoa cầm tay 01.html">
                        Hoa cầm tay 01
                      </a>
                    </h5>
                    <p className="montserrat-medium color-dark-75">
                      350.000 VNĐ
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-start row-margin-top-30 hide">
                <Col md={3} sm={6} xs={6}>
                  <div className="img-showcases-container items-margin-top-20">
                    <img
                      className="img img-showcases img-fluid"
                      alt="Products"
                      src="./images/products/products (5).png"
                    />
                    <a
                      className="text-showcases-2"
                      role="button"
                      href="Hoa cầm tay 01.html"
                    >
                      <p className="montserrat-medium">
                        <span className="dripicons-basket margin-right-10" />
                        Mua ngay
                      </p>
                    </a>
                  </div>
                  <div className=" margin-top-4th">
                    <h5 className="h5-masthead montserrat-semibold">
                      <a className="product01" href="Hoa cầm tay 01.html">
                        Hoa cầm tay 01
                      </a>
                    </h5>
                    <p className="montserrat-medium color-dark-75">
                      350.000 VNĐ
                    </p>
                  </div>
                </Col>
                <Col md={3} sm={6} xs={6}>
                  <div className="img-showcases-container items-margin-top-20">
                    <img
                      className="img img-showcases img-fluid"
                      alt="Products"
                      src="./images/products/products (6).png"
                    />
                    <a
                      className="text-showcases-2"
                      role="button"
                      href="Hoa cầm tay 01.html"
                    >
                      <p className="montserrat-medium">
                        <span className="dripicons-basket margin-right-10" />
                        Mua ngay
                      </p>
                    </a>
                  </div>
                  <div className=" margin-top-4th">
                    <h5 className="h5-masthead montserrat-semibold">
                      <a className="product01" href="Hoa cầm tay 01.html">
                        Hoa cầm tay 01
                      </a>
                    </h5>
                    <p className="montserrat-medium color-dark-75">
                      350.000 VNĐ
                    </p>
                  </div>
                </Col>
                <Col md={3} sm={6} xs={6} className="items-margin-top-20">
                  <div className="img-showcases-container items-margin-top-20">
                    <img
                      className="img img-showcases img-fluid"
                      alt="Products"
                      src="./images/products/products (7).png"
                    />
                    <a
                      className="text-showcases-2"
                      role="button"
                      href="Hoa cầm tay 01.html"
                    >
                      <p className="montserrat-medium">
                        <span className="dripicons-basket margin-right-10" />
                        Mua ngay
                      </p>
                    </a>
                  </div>
                  <div className=" margin-top-4th">
                    <h5 className="h5-masthead montserrat-semibold">
                      <a className="product01" href="Hoa cầm tay 01.html">
                        Hoa cầm tay 01
                      </a>
                    </h5>
                    <p className="montserrat-medium color-dark-75">
                      350.000 VNĐ
                    </p>
                  </div>
                </Col>
                <Col md={3} sm={6} xs={6} className="items-margin-top-20">
                  <div className="img-showcases-container items-margin-top-20">
                    <img
                      className="img img-showcases img-fluid"
                      alt="Products"
                      src="./images/products/products (8).png"
                    />
                    <a
                      className="text-showcases-2"
                      role="button"
                      href="Hoa cầm tay 01.html"
                    >
                      <p className="montserrat-medium">
                        <span className="dripicons-basket margin-right-10" />
                        Mua ngay
                      </p>
                    </a>
                  </div>
                  <div className=" margin-top-4th">
                    <h5 className="h5-masthead montserrat-semibold">
                      <a className="product01" href="Hoa cầm tay 01.html">
                        Hoa cầm tay 01
                      </a>
                    </h5>
                    <p className="montserrat-medium color-dark-75">
                      350.000 VNĐ
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Tab.Pane>
          <Tab.Pane eventKey="second" />
        </Tab.Content>
        <a
          className="btn btn-masthead btn-bd-primary btn-lg montserrat-semibold color-light margin-top-tertiary"
          href="Sản phẩm.html"
          role="button"
        >
          Xem thêm
        </a>
      </Tab.Container>
    );
  }
}

export default Content;
