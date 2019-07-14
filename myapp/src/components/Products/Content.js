import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Data from "../../Data";

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 4
    };
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  render() {
    const { rating } = this.state;
    return (
      <div>
        <div className="img-showcases-container items-margin-top-20">
          <img
            className="img img-showcases img-fluid"
            alt="Products"
            src={this.props.data.img}
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
              {this.props.data.name}
            </a>
          </h5>
          <p className="h1-masthead montserrat-medium color-dark-75">
            {this.props.data.price}
          </p>
          <div>
            {" "}
            <StarRatingComponent
              name="rate1"
              renderStarIcon={() => <i className="fas fa-star" />}
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
              emptyStarColor="#343a4080"
              starColor="#F2C94C"
            />
          </div>{" "}
        </div>
      </div>
    );
  }
}

class Content extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 4,
      value: { min: 0, max: 5000000 }
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  buildContent() {
    let data = Data.getData("products");
    let results = [];
    let _colItems = [];
    for (let i = 0; i < data.length; i++) {
      _colItems.push(
        <Col key={i} md={4} sm={6} xs={6}>
          <ProductItem data={data[i]} />
        </Col>
      );
      if ((i + 1) % 6 == 0) {
        results.push(<Row key={"row" + i}>{_colItems}</Row>);
        _colItems = [];
      }
    }

    if (_colItems.length > 0) {
      results.push(<Row key={"lastrow"}>{_colItems}</Row>);
    }

    return results;
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md={3} sm={12} xs={12} style={{fontSize: "smaller"}}>
            {" "}
            <Nav
              defaultActiveKey="/"
              className="flex-column bg-very-soft-orange-12-5"
              style={{ textAlign: "left", padding: "1.875rem" }}
            >
              <h4 className="h4-masthead montserrat-bold color-dark-blue">
                SẢN PHẨM
              </h4>
              <Nav.Link
                href="/Products"
                className="montserrat-semibold color-dark-75 a-masthead-2"
              >
                Hoa cưới
              </Nav.Link>
              <Nav.Link
                href="/Products"
                className="montserrat-medium color-dark-75 a-masthead-1"
                style={{ marginLeft: "1.25rem" }}
              >
                Hoa cầm tay
              </Nav.Link>
              <Nav.Link
                href="/Products"
                className="montserrat-medium color-dark-75 a-masthead-1"
                style={{ marginLeft: "1.25rem" }}
              >
                Cổng hoa
              </Nav.Link>
              <Nav.Link
                href="/Products"
                className="montserrat-semibold color-dark-75 a-masthead-2"
              >
                Phụ kiện trang trí
              </Nav.Link>
              <Nav.Link
                href="/Products"
                className="montserrat-medium color-dark-75 a-masthead-1"
                style={{ marginLeft: "1.25rem" }}
              >
                Bộ bàn ghế{" "}
              </Nav.Link>
              <Nav.Link
                href="/Products"
                className="montserrat-medium color-dark-75 a-masthead-1"
                style={{ marginLeft: "1.25rem" }}
              >
                Thùng tiền{" "}
              </Nav.Link>
              <Nav.Link
                href="/Products"
                className="montserrat-medium color-dark-75 a-masthead-1"
                style={{ marginLeft: "1.25rem" }}
              >
                Sổ lưu bút{" "}
              </Nav.Link>
              <Nav.Link
                href="/Products"
                className="montserrat-medium color-dark-75 a-masthead-1"
                style={{ marginLeft: "1.25rem" }}
              >
                {" "}
                Lọ hoa
              </Nav.Link>
              <Nav.Link
                href="/Products"
                className="montserrat-medium color-dark-75 a-masthead-1"
                style={{ marginLeft: "1.25rem" }}
              >
                Tranh ảnh & Khung{" "}
              </Nav.Link>
              <Nav.Link
                href="/Products"
                className="montserrat-medium color-dark-75 a-masthead-1"
                style={{ marginLeft: "1.25rem" }}
              >
                Nến & Đế nến{" "}
              </Nav.Link>
              <Nav.Link
                href="/Products"
                className="montserrat-medium color-dark-75 a-masthead-1"
                style={{ marginLeft: "1.25rem" }}
              >
                Khác{" "}
              </Nav.Link>
              <h4
                className="montserrat-bold color-dark-blue"
                style={{ marginTop: "1.125rem", marginBottom: "1.125rem" }}
              >
                ĐÁNH GIÁ{" "}
              </h4>
              <div
                className="rating-filter-maxheight"
                style={{
                  textAlign: "left",
                  marginLeft: "0.625rem"
                }}
              >
                <Row>
                  <Col md={12} sm={12} xs={12}>
                    {" "}
                    <p><StarRatingComponent
                      name="rate2"
                      renderStarIcon={() => <i className="fas fa-star" />}
                      starCount={5}
                      value={4}
                      onStarClick={this.onStarClick.bind(this)}
                      emptyStarColor="#343a4080"
                      starColor="#F2C94C"
                    />(ít nhất 4 sao)</p>
                  </Col>
                  {/* <Col md={6} sm={12} xs={12}>
                    (ít nhất 4 sao)
                  </Col> */}
                </Row>
                <Row>
                  <Col md={5} sm={5} xs={12}>
                    {" "}
                    <StarRatingComponent
                      name="rate2"
                      renderStarIcon={() => <i className="fas fa-star" />}
                      starCount={5}
                      value={3}
                      onStarClick={this.onStarClick.bind(this)}
                      emptyStarColor="#343a4080"
                      starColor="#F2C94C"
                    />
                  </Col>
                  <Col md={7} sm={7} xs={12}>
                    (ít nhất 3 sao)
                  </Col>
                </Row>
                <Row>
                  <Col md={5} sm={5} xs={12}>
                    {" "}
                    <StarRatingComponent
                      name="rate2"
                      renderStarIcon={() => <i className="fas fa-star" />}
                      starCount={5}
                      value={2}
                      onStarClick={this.onStarClick.bind(this)}
                      emptyStarColor="#343a4080"
                      starColor="#F2C94C"
                    />
                  </Col>
                  <Col md={7} sm={7} xs={12}>
                    (ít nhất 2 sao)
                  </Col>
                </Row>
                <Row>
                  <Col md={5} sm={5} xs={12}>
                    {" "}
                    <StarRatingComponent
                      name="rate2"
                      renderStarIcon={() => <i className="fas fa-star" />}
                      starCount={5}
                      value={1}
                      onStarClick={this.onStarClick.bind(this)}
                      emptyStarColor="#343a4080"
                      starColor="#F2C94C"
                    />
                  </Col>
                  <Col md={7} sm={7} xs={12}>
                    (ít nhất 1 sao)
                  </Col>
                </Row>
              </div>
              <h4
                className="montserrat-bold color-dark-blue"
                style={{ marginTop: "1.125rem", marginBottom: "1.125rem" }}
              >
                GIÁ{" "}
              </h4>
              <Nav.Link
                href="/Products"
                className="montserrat-medium color-dark-75 a-masthead-1"
                style={{ marginLeft: "1.25rem" }}
              >
                0-500.000 VNĐ{" "}
              </Nav.Link>
              <Nav.Link
                href="/Products"
                className="montserrat-medium color-dark-75 a-masthead-1"
                style={{ marginLeft: "1.25rem" }}
              >
                500.000-1.000.000 VNĐ{" "}
              </Nav.Link>
              <Nav.Link
                href="/Products"
                className="montserrat-medium color-dark-75 a-masthead-1"
                style={{ marginLeft: "1.25rem" }}
              >
                1.000.000-5.000.000 VNĐ{" "}
              </Nav.Link>
              <Nav.Link
                href="/Products"
                className="montserrat-medium color-dark-75 a-masthead-1"
                style={{ marginLeft: "1.25rem" }}
              >
                >= 5.000.000 VNĐ{" "}
              </Nav.Link>
              <div style={{ marginTop: "2.5rem", marginBottom: "2.5rem" }}>
                {" "}
                <InputRange
                  formatLabel={value => `${value}đ`}
                  maxValue={5000000}
                  minValue={0}
                  value={this.state.value}
                  onChange={value => this.setState({ value })}
                />
              </div>
            </Nav>
          </Col>
          <Col md={9} sm={12} xs={12}>
            {" "}
            <Row style={{ padding: "0.9375rem" }}>
              <p
                className="montserrat-semibold color-dark-blue"
                style={{ paddingLeft: "0rem", paddingRight: "0.312rem", paddingTop: "0.3125rem", paddingBottom: "0.3125rem" }}
              >
                Ưu tiên xem:
              </p>
              <p
                className="montserrat-medium color-dark-75"
                style={{ padding: "0.3125rem" }}
              >
                HÀNG MỚI
              </p>
              <p
                className="montserrat-medium color-dark-75"
                style={{ padding: "0.3125rem" }}
              >
                BÁN CHẠY
              </p>
              <p
                className="montserrat-medium color-dark-75"
                style={{ padding: "0.3125rem" }}
              >
                GIẢM GIÁ NHIỀU
              </p>
              <p
                className="montserrat-medium color-dark-75"
                style={{ padding: "0.3125rem" }}
              >
                GIÁ THẤP
              </p>
              <p
                className="montserrat-medium color-dark-75"
                style={{ padding: "0.3125rem" }}
              >
                GIÁ CAO
              </p>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                // className=" mr-sm-2"
                />
                <Button
                  // className="btn-search" 
                  type="submit">
                  <span className="dripicons-search" />
                </Button>
              </Form>
            </Row>
            {this.buildContent()}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
