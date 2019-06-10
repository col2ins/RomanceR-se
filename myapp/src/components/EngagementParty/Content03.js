import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Content01 extends React.Component {
  render() {
    return (
      <Container>
        <Row
          className="margin-top-secondary"
          style={{ border: "1px solid rgba(237, 178, 155, 0.25)" }}
        >
          <Col
            md={3}
            sm={12}
            style={{
              backgroundColor: "rgba(237, 178, 155, 0.125)"
            }}
          >
            <h4
              className="h4 playfairdisplay-bolditalic color-very-soft-orange"
              style={{
                margin: "0",
                paddingTop: "4.125rem",
                paddingBottom: "4.125rem"
              }}
            >
              <b style={{ fontSize: "xx-large" }}>5</b> tráp ăn hỏi rồng phượng
              100 xuất chia
            </h4>
          </Col>
          <Col md={3} sm={12} style={{ textAlign: "left" }}>
            <p
              className="p montserrat-medium color-dark-75 padding-tb-30-2"
              style={{ margin: "0" }}
            >
              <i
                className="fas fa-check color-dark-blue"
                style={{ marginRight: "0.625rem" }}
              />
              Trầu cau
              <br />
              <br />
              <i
                className="fas fa-check color-dark-blue"
                style={{ marginRight: "0.625rem" }}
              />
              Bánh cốm
              <br />
              <br />
              <i
                className="fas fa-check color-dark-blue"
                style={{ marginRight: "0.625rem" }}
              />
              Chè Thái Nguyên
            </p>
          </Col>
          <Col md={3} sm={12} style={{ textAlign: "left" }}>
            <p
              className="p montserrat-medium color-dark-75 padding-tb-30-1"
              style={{ margin: "0" }}
            >
              <i
                className="fas fa-check color-dark-blue"
                style={{ marginRight: "0.625rem" }}
              />
              Rượu thuốc
              <br />
              <br />
              <i
                className="fas fa-check color-dark-blue"
                style={{ marginRight: "0.625rem" }}
              />
              Hoa quả tươi
              <br />
              <br />
              <i
                className="fas fa-check color-dark-blue"
                style={{ marginRight: "0.625rem" }}
              />
              Lễ đen & Tiền lì xì
            </p>
          </Col>
          <Col
            md={3}
            sm={12}
            style={{
              backgroundColor: "rgba(237, 178, 155, 0.125)"
            }}
          >
            <h5
              className="h5 montserrat-semibold color-dark-blue"
              style={{
                margin: "0",
                paddingTop: "4.125rem",
                paddingBottom: "4.125rem"
              }}
            >
              Từ <br />
              7.900.000 VNĐ
            </h5>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content01;
