import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <div className="app-header line-height-2">
        <Navbar collapseOnSelect expand="xl" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/images/logo.svg"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav className="line-height-2">
              <Nav.Link className="nav-bar-link-masthead" href="/">
                <span className="dripicons-home" />
              </Nav.Link>
              <Nav.Link
                className="nav-bar-link-masthead montserrat-semibold"
                href="/AboutUs"
              >
                Về chúng tôi
              </Nav.Link>
              <NavDropdown
                title="Dịch vụ"
                id="collasible-nav-dropdown"
                className="nav-bar-link-masthead montserrat-semibold"
              >
                <NavDropdown.Item href="/Miai">Lễ dạm ngõ</NavDropdown.Item>
                <NavDropdown.Item href="/EngagementParty">
                  Lễ ăn hỏi
                </NavDropdown.Item>
                <NavDropdown.Item href="/lecuoi">Lễ cưới</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Sản phẩm"
                id="collasible-nav-dropdown"
                className="nav-bar-link-masthead montserrat-semibold"
              >
                <NavDropdown.Item href="#action/3.1">Hoa cưới</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Phụ kiện trang trí
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Thư viện ảnh"
                id="collasible-nav-dropdown"
                className="nav-bar-link-masthead montserrat-semibold"
              >
                <NavDropdown.Item href="#action/3.1">
                  Lễ dạm ngõ
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Lễ ăn hỏi
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Lễ cưới</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="nav-bar-link-masthead montserrat-semibold"
                href=""
              >
                Cẩm nang cưới
              </Nav.Link>
              <NavDropdown
                title="Hỗ trợ khách hàng"
                id="collasible-nav-dropdown"
                className="nav-bar-link-masthead montserrat-semibold"
              >
                <NavDropdown.Item href="#action/3.1">
                  Các câu hỏi thường gặp
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Gửi yêu cầu hỗ trợ
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Hướng dẫn đặt hàng
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Phương thức vận chuyển
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Chính sách đổi trả
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">
                  Dự toán chi phí lễ cưới hỏi
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="nav-bar-link-masthead montserrat-semibold"
                href=""
              >
                Liên hệ
              </Nav.Link>
              <Nav.Link className="nav-bar-link-masthead line-height-1" href="">
                <span className="dripicons-basket icon-size color-very-soft-orange-75" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
