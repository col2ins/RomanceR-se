import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Muc01 from "./Muc01";
import TitleMuc01 from "./TitleMuc01";

class Content extends React.Component {
  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={4}>
            <Nav
              variant="pills"
              className="flex-column bg-very-soft-orange-12-5"
              style={{ padding: "1.25rem" }}
            >
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  className="h5 h5-masthead montserrat-semibold color-dark-blue nav-link-masthead"
                  style={{ textAlign: "left" }}
                >
                  Câu hỏi thường gặp
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  className="h5 h5-masthead montserrat-semibold color-dark-blue nav-link-masthead"
                  style={{ textAlign: "left" }}
                >
                  Gửi yêu cầu hỗ trợ
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="3rd"
                  className="h5 h5-masthead montserrat-semibold color-dark-blue nav-link-masthead"
                  style={{ textAlign: "left" }}
                >
                  Hướng dẫn đặt hàng
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="4th"
                  className="h5 h5-masthead montserrat-semibold color-dark-blue nav-link-masthead"
                  style={{ textAlign: "left" }}
                >
                  Phương thức vận chuyển
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="5th"
                  className="h5 h5-masthead montserrat-semibold color-dark-blue nav-link-masthead"
                  style={{ textAlign: "left" }}
                >
                  Chính sách đổi trả
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="6th"
                  className="h5 h5-masthead montserrat-semibold color-dark-blue nav-link-masthead"
                  style={{ textAlign: "left", marginBottom: "1.25rem" }}
                >
                  Dự toán chi phí lễ cưới hỏi
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="first" style={{ textAlign: "left" }}>
                <TitleMuc01 />
                <Muc01 />
              </Tab.Pane>
              <Tab.Pane eventKey="second" style={{ textAlign: "left" }}>
                <TitleMuc01 />
                <Muc01 />
              </Tab.Pane>
              <Tab.Pane eventKey="3rd" style={{ textAlign: "left" }}>
                <TitleMuc01 />
                <Muc01 />
              </Tab.Pane>
              <Tab.Pane eventKey="4th" style={{ textAlign: "left" }}>
                <TitleMuc01 />
                <Muc01 />
              </Tab.Pane>
              <Tab.Pane eventKey="5th" style={{ textAlign: "left" }}>
                <TitleMuc01 />
                <Muc01 />
              </Tab.Pane>
              <Tab.Pane eventKey="6th" style={{ textAlign: "left" }}>
                <TitleMuc01 />
                <Muc01 />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default Content;
