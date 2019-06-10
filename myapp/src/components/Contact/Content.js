import React from "react";
import { Container, Row, Col} from "react-bootstrap";

class Content extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={8}>
            <Row>
              <Col md={6}>
                <h5 className="h5-masthead montserrat-semibold color-dark-blue">
                  Địa chỉ văn phòng
                </h5>
                <Row className="margin-top-4th">
                  <Col sm={2} xs={2}>
                    <div
                      className="bg-very-soft-orange"
                      style={{
                        display: "table",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "1.25rem"
                      }}
                    >
                      <span
                        className="dripicons-location color-light"
                        style={{
                          display: "table-cell",
                          fontSize: "1.5rem",
                          textAlign: "center",
                          verticalAlign: "bottom"
                        }}
                      />
                    </div>
                  </Col>
                  <Col sm={8} xs={8}>
                    <p class="h2-masthead montserrat-medium color-dark-75">
                      5/12 đường A, khu dân cư An Lộc, Bình An, Q.2, TPHCM.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="items-margin-top-20-contact-social-media">
                <h5 className="h5-masthead montserrat-semibold color-dark-blue">
                  Theo dõi
                </h5>
                <Row className="margin-top-4th">
                  <div className="col-2">
                    <i
                      className="fab fa-facebook-f color-very-soft-orange"
                      style={{ fontSize: "1.875rem" }}
                    />
                  </div>
                  <div className="col-3">
                    <i
                      className="fab fa-youtube color-very-soft-orange"
                      style={{ fontSize: "1.875rem" }}
                    />
                  </div>
                  <div className="col-3">
                    <i
                      className="fab fa-instagram color-very-soft-orange"
                      style={{ fontSize: "1.875rem" }}
                    />
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className="margin-top-tertiary">
              <Col md={6} className="items-margin-top-20-contact">
                <h5 className="h5-masthead montserrat-semibold color-dark-blue">
                  Liên hệ
                </h5>
                <Row className="margin-top-4th">
                  <Col sm={2} xs={2}>
                    <div
                      className="bg-very-soft-orange"
                      style={{
                        display: "table",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "1.25rem"
                      }}
                    >
                      <span
                        className="dripicons-phone color-light"
                        style={{
                          display: "table-cell",
                          fontSize: "1.5rem",
                          textAlign: "center",
                          verticalAlign: "bottom"
                        }}
                      />
                    </div>
                  </Col>
                  <Col sm={10} xs={10}>
                    <p className="montserrat-medium color-dark-75 margin-0">
                      Hotline đặt lịch hẹn:
                    </p>
                    <h4 className="montserrat-semibold color-dark margin-0">
                      1800-6868
                    </h4>
                    <p className="montserrat-medium color-dark-75 margin-0">
                      (Miễn phí, 8-21h kể cả T7, CN)
                    </p>
                  </Col>
                </Row>
                <Row className="margin-top-4th">
                  <Col sm={2} xs={2}>
                    <div
                      className="bg-very-soft-orange"
                      style={{
                        display: "table",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "1.25rem"
                      }}
                    >
                      <span
                        className="dripicons-phone color-light"
                        style={{
                          display: "table-cell",
                          fontSize: "1.5rem",
                          textAlign: "center",
                          verticalAlign: "bottom"
                        }}
                      />
                    </div>
                  </Col>
                  <Col sm={10} xs={10}>
                    <p className="montserrat-medium color-dark-75 margin-0">
                      Hotline mua hàng:
                    </p>
                    <h4 className="montserrat-semibold color-dark margin-0">
                      1800-8686
                    </h4>
                    <p className="montserrat-medium color-dark-75 margin-0">
                      (Miễn phí, 8-21h kể cả T7, CN)
                    </p>
                  </Col>
                </Row>
                <Row className="margin-top-4th">
                  <Col sm={2} xs={2}>
                    <div
                      className="bg-very-soft-orange"
                      style={{
                        display: "table",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "1.25rem"
                      }}
                    >
                      <span
                        className="dripicons-mail color-light"
                        style={{
                          display: "table-cell",
                          fontSize: "1.5rem",
                          textAlign: "center",
                          verticalAlign: "bottom"
                        }}
                      />
                    </div>
                  </Col>
                  <Col sm={10} xs={10}>
                    <p
                      className="montserrat-medium color-dark-75 margin-0"
                      style={{ lineHeight: "2.5" }}
                    >
                      Support@romancerose.vn
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="items-margin-top-20-contact">
                <h5 className="h5-masthead montserrat-semibold color-dark-blue">
                  Hỗ trợ khách hàng
                </h5>
                <div className="margin-top-4th">
                  <a href="#demo">
                    <p className="h2-masthead montserrat-medium color-dark-75">
                      Các câu hỏi thường gặp
                    </p>
                  </a>
                  <a href="#demo">
                    <p className="h2-masthead montserrat-medium color-dark-75">
                      Gửi yêu cầu hỗ trợ
                    </p>
                  </a>
                  <a href="#demo">
                    <p className="h2-masthead montserrat-medium color-dark-75">
                      Hướng dẫn đặt hàng
                    </p>
                  </a>
                  <a href="#demo">
                    <p className="h2-masthead montserrat-medium color-dark-75">
                      Phương thức vận chuyển
                    </p>
                  </a>
                  <a href="#demo">
                    <p className="h2-masthead montserrat-medium color-dark-75">
                      Chính sách đổi trả
                    </p>
                  </a>
                  <a href="#demo">
                    <p className="h2-masthead montserrat-medium color-dark-75">
                      Dự toán chi phí lễ cưới hỏi
                    </p>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4} className="items-margin-top-20-contact">
            <h5 className="h5-masthead montserrat-semibold color-dark-blue">
              Liên hệ với chúng tôi
            </h5>
            <Row className="margin-top-4th">
              <Col sm={6} xs={6}>
                <input
                  type="text"
                  name="Fullname"
                  value="Họ tên"
                  defaultValue=""
                  className="montserrat-medium color-dark-25"
                />
              </Col>
              <Col sm={6} xs={6}>
                <input
                  type="email"
                  name="Email"
                  value="Email"
                  className="montserrat-medium color-dark-25"
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "0.9375rem" }}>
              <Col sm={12} xs={12}>
                <textarea
                  rows="6"
                  cols="12"
                  className="montserrat-medium color-dark-25"
                  defaultValue="Nội dung"
                >
                  
                </textarea>
              </Col>
            </Row>
            <Row style={{ marginTop: "1.875rem" }}>
              <Col sm={12} xs={12}>
                <a
                  className="btn btn-masthead btn-bg-secondary btn-lg montserrat-semibold color-light"
                  style={{ width: "100%" }}
                  href="Liên hệ.html"
                  role="button"
                >
                  Liên hệ ngay
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
