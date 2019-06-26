import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Content extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col
            md={4}
            sm={12}
            className="text-align-center margin-top-secondary"
          >
            <img
              className="img img-fluid"
              src="./images/blog/blog (1).png"
              alt=""
            />
            <div className="bg-very-soft-orange-12-5 padding-tb-30-lr-15">
              <a href="/BlogDemo">
                <h5 className="playfairdisplay-bolditalic color-dark-blue padding-20-10">
                  Các bước cơ bản lên kế hoạch chuẩn bị cho đám cưới
                </h5>
              </a>
              <p className="h2-masthead montserrat-medium color-dark-75 margin-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="montserrat-semibold color-dark-blue margin-top-30">
                04/06/2019
              </p>
            </div>
          </Col>
          <Col
            md={4}
            sm={12}
            className="text-align-center margin-top-secondary"
          >
            <img
              className="img img-fluid"
              src="./images/blog/blog (2).png"
              alt=""
            />
            <div className="bg-very-soft-orange-12-5 padding-tb-30-lr-15">
              <h5 className="playfairdisplay-bolditalic color-dark-blue padding-20-10">
                Khuyến mại mùa cưới 2019 & bí quyết tổ chức hôn lễ tiết kiệm
              </h5>
              <p className="h2-masthead montserrat-medium color-dark-75 margin-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="montserrat-semibold color-dark-blue margin-top-30">
                04/06/2019
              </p>
            </div>
          </Col>
          <Col
            md={4}
            sm={12}
            className="text-align-center margin-top-secondary"
          >
            <img
              className="img img-fluid"
              src="./images/blog/blog (3).png"
              alt=""
            />
            <div className="bg-very-soft-orange-12-5 padding-tb-30-lr-15">
              <h5 className="playfairdisplay-bolditalic color-dark-blue padding-20-10">
                Những điều cần lưu ý khi thuê Wedding Planner
              </h5>
              <p className="h2-masthead montserrat-medium color-dark-75 margin-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="montserrat-semibold color-dark-blue margin-top-30">
                04/06/2019
              </p>
            </div>
          </Col>
        </Row>
        <a
          className="btn btn-masthead btn-bd-primary btn-lg montserrat-semibold color-light margin-top-tertiary"
          href="/Blog"
          role="button"
        >
          Xem thêm
        </a>
      </Container>
    );
  }
}

export default Content;
