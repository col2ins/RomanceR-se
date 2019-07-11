import React from "react";
import { Breadcrumb } from "react-bootstrap";
// import Title from "./Title";
import Content from "./Content";

class Products extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Breadcrumb style={{ width: "100%" }}>
          <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item href="/Products">Sản phẩm</Breadcrumb.Item>
          <Breadcrumb.Item href="/Bouquet" active>
            Hoa cưới
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="jumbotron-masthead jumbotron-fluid">
          {/* <Title /> */}
          <Content />
        </div>
      </div>
    );
  }
}

export default Products;
