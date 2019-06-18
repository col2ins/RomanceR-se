import React from "react";

import { Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
// import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';

// import 'rc-menu/assets/index.css';
class NavBar extends React.Component {
  onMouseOverHandle(event) {
    console.log(event.target.tagName);
    if (
      event.target.tagName == "A" &&
      !event.target.classList.contains("show") &&
      event.target.classList.contains("dropdown-toggle")
    ) {
      console.log(event.target);
      event.target.click();
      event.preventDefault();
      console.log(event.target);
    }
  }
  onMouseClickHandle(event) {
    let _parent = event.target.parentElement;
    if (_parent.classList.contains("nav-item-dropdown")) {
      let _href = _parent.getAttribute("href");
      if (_href) {
        window.location.href = _href;
      }
    }
  }
  render() {
    return (
      <div className="app-header line-height-2">
        <Navbar collapseOnSelect expand="xl" variant="dark" fixed={"top"}>
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
                href="/Miai"
                test="aaa"
                className="nav-item-dropdown nav-bar-link-masthead montserrat-semibold"
                onMouseOver={this.onMouseOverHandle}
                onClick={this.onMouseClickHandle}
              >
                <NavDropdown.Item href="/Miai">Lễ dạm ngõ</NavDropdown.Item>
                <NavDropdown.Item href="/EngagementParty">
                  Lễ ăn hỏi
                </NavDropdown.Item>
                <NavDropdown.Item href="/WeddingParty">
                  Lễ cưới
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Sản phẩm"
                id="collasible-nav-dropdown"
                className="nav-bar-link-masthead montserrat-semibold"
                onMouseOver={this.onMouseOverHandle}
              >
                <NavDropdown.Item href="#action/3.1">Hoa cưới</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Phụ kiện trang trí
                </NavDropdown.Item>
              </NavDropdown>
              {/* <NavDropdown
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
              </NavDropdown> */}
              <Nav.Link
                className="nav-bar-link-masthead montserrat-semibold"
                href="/Showcases"
              >
                Thư viện ảnh
              </Nav.Link>
              <Nav.Link
                className="nav-bar-link-masthead montserrat-semibold"
                href=""
              >
                Cẩm nang cưới
              </Nav.Link>
              <Nav.Link
                className="nav-bar-link-masthead montserrat-semibold"
                href="/Support"
              >
                Hỗ trợ khách hàng
              </Nav.Link>
              {/* <NavDropdown
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
              </NavDropdown> */}
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
