import React from "react";

import { Navbar, Nav } from "react-bootstrap";
// import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';

// import 'rc-menu/assets/index.css';
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasTransistion: ""};
    this.scrollHandle = this.scrollHandle.bind(this);
  }
  buildMenuList() {
    let data = [
      {
        name: "home",
        title: "",
        icon: "dripicons-home",
        link: "/"
      },
      {
        name: "vechungtoi",
        title: "Về chúng tôi",
        icon: "",
        link: "/AboutUs"
      },
      {
        name: "dichvu",
        title: "Dịch vụ",
        icon: "",
        link: "#",
        children: [
          {
            name: "ledamngo",
            title: "Lễ dạm ngõ",
            icon: "",
            link: "/Miai"
          },
          {
            name: "leanhoi",
            title: "Lễ ăn hỏi",
            icon: "",
            link: "/EngagementParty"
          },
          {
            name: "lecuoi",
            title: "Lễ cưới",
            icon: "",
            link: "/WeddingParty"
          },
        ]
      },
      {
        name: "sanpham",
        title: "Sản phẩm",
        icon: "",
        link: "/Products",
        children: [
          {
            name: "hoacuoi",
            title: "Hoa cưới",
            icon: "",
            link: "/Bouquet"
          },
          {
            name: "phukientrantri",
            title: "Phụ kiện trang trí",
            icon: "",
            link: "/Accessories"
          }
        ]
      },
      {
        name: "thuvienanh",
        title: "Thư viện ảnh",
        icon: "",
        link: "/Showcases"
      },
      {
        name: "camnangcuoi",
        title: "Cẩm nang cưới",
        icon: "",
        link: "/Showcases"
      },
      {
        name: "hotrokhachang",
        title: "Hỗ trợ khách hàng",
        icon: "",
        link: "/Support"
      },
      {
        name: "lienhe",
        title: "Liên hệ",
        icon: "",
        link: "/Contact"
      }
    ];

    let results = [];

    for (let i = 0; i < data.length; i++) {
      if (!data[i].children) {
        results.push(this.buildMenuString([data[i]]));
      } else {
        let _memu = this.buildMenuString(data[i].children);
        results.push(
          <li key={data[i].name}>
            <a href={data[i].link}>{data[i].title}</a>
            <ul>
              {_memu}
            </ul>
          </li>
        )
      }
    }
    return (
      <div className="app-navigation">
        <ul className="main-navigation">
          {results}
        </ul>
      </div>
    );
  }

  buildMenuString(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(
        <li key={data[i].name}>
          <a href={data[i].link}>
            {data[i].icon?(<i className={"app-menu-icon " + data[i].icon}></i>):""}
            {data[i].title}
          </a>
        </li>
      );
    }
    return result;
  }

  scrollHandle() {
    if(!this.offsetHeader) {
      this.offsetHeader = document.getElementsByClassName("page-content")[0].offsetTop - 100;
    }
    this.hasTransistion = "";
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > this.offsetHeader) {
      this.hasTransistion = "app-menu-transistion";
    }

    if(this.hasTransistion !== this.state.hasTransistion) {
      this.setState({hasTransistion: this.hasTransistion});
    }
  }
  registerEvent() {
    window.addEventListener("scroll", this.scrollHandle);
  }
  componentDidMount() {
    this.scrollHandle();
    this.registerEvent();
  }
  render() {
    return (
      <div className="app-header line-height-2">
        <Navbar className={this.hasTransistion} collapseOnSelect expand="xl" variant="dark" fixed={"top"}>
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
              {this.buildMenuList()}
              {/* <Nav.Link className="nav-bar-link-masthead" href="/">
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
              <Nav.Link
                className="nav-bar-link-masthead montserrat-semibold"
                href="/Contact"
              >
                Liên hệ
              </Nav.Link>
              <Nav.Link className="nav-bar-link-masthead line-height-1" href="">
                <span className="dripicons-basket icon-size color-very-soft-orange-75" />
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
