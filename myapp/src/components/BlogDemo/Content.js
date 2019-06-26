import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Content extends React.Component {
  render() {
    return (
      <Container style={{ textAlign: "left" }}>
        <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
          Các bước cơ bản lên kế hoạch chuẩn bị cho đám cưới
        </h2>{" "}
        <Row>
          <h5
            className="h5-masthead montserrat-semibold color-dark-blue blogdemo"
            style={{ paddingRight: "1.25rem", paddingLeft: "1.25rem" }}
          >
            <i
              className="dripicons-clock color-dark-75"
              style={{ fontSize: "larger", paddingRight: "0.625rem" }}
            />
            8h:00
          </h5>
          <h5
            className="h5-masthead montserrat-semibold color-dark-blue blogdemo"
            style={{ paddingRight: "1.25rem" }}
          >
            <i
              className="dripicons-calendar color-dark-75"
              style={{ fontSize: "larger", paddingRight: "0.625rem" }}
            />
            16/02/2019
          </h5>
          <h5
            className="h5-masthead montserrat-semibold color-dark-75 blogdemo"
            style={{ lineHeight: "1.75", paddingRight: "1.25rem" }}
          >
            bởi <i className="color-dark-blue">Hoàng Vũ</i>{" "}
          </h5>
        </Row>
        <hr
          style={{
            width: "100%",
            backgroundColor: "rgba(237, 178, 155, 0.5)",
            marginBottom: "3.125rem",
            marginTop: "3.125rem"
          }}
        />
        <img
          className="img img-fluid"
          src="./images/blog/blog (1).png"
          alt=""
          style={{ width: "100%" }}
        />
        <p className="montserrat-medium color-dark-75 margin-top-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta
          fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales
          condimentum metus. Nulla non fermentum nisl. Maecenas id molestie
          turpis, sit amet feugiat lorem. Curabitur sed erat vel tellus
          hendrerit tincidunt. Sed arcu tortor, sollicitudin ac lectus sed,
          rhoncus iaculis lectus. Ut efficitur feugiat enim a euismod. Mauris
          suscipit vehicula imperdiet. <br />
          <br />
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Ut tristique pretium tellus, sed fermentum
          est vestibulum id. Aenean semper, odio sed fringilla blandit, nisl
          nulla placerat mauris, sit amet commodo mi turpis at libero. Curabitur
          varius eros et lacus rutrum consequat. Mauris sollicitudin enim
          condimentum, luctus justo non, molestie nisl. Aenean et egestas nulla.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Fusce gravida, ligula non molestie tristique,
          justo elit blandit risus, blandit maximus augue magna accumsan ante.
          Aliquam bibendum lacus quis nulla dignissim faucibus. Sed mauris enim,
          bibendum at purus aliquet, maximus molestie tortor. Sed faucibus et
          tellus eu sollicitudin. Sed fringilla malesuada luctus. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta
          fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales
          condimentum metus. Nulla non fermentum nisl. Maecenas id molestie
          turpis, sit amet feugiat lorem. Curabitur sed erat vel tellus
          hendrerit tincidunt. Sed arcu tortor, sollicitudin ac lectus sed,
          rhoncus iaculis lectus. Ut efficitur feugiat enim a euismod. Mauris
          suscipit vehicula imperdiet. <br />
          <br />
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Ut tristique pretium tellus, sed fermentum
          est vestibulum id. Aenean semper, odio sed fringilla blandit, nisl
          nulla placerat mauris, sit amet commodo mi turpis at libero.{" "}
        </p>
        <hr
          style={{
            width: "100%",
            backgroundColor: "rgba(237, 178, 155, 0.5)",
            marginBottom: "1.875rem",
            marginTop: "3.125rem"
          }}
        />
        <p className="montserrat-semibold color-dark-blue">
          Tag: <a style={{ color: "#191C51" }}>Đám cưới</a>,{" "}
          <a style={{ color: "#191C51" }}>Kế hoạch</a>
        </p>
        <div
          className="bg-very-soft-orange-12-5"
          style={{ marginTop: "6.25rem", marginBottom: "6.25rem" }}
        >
          {" "}
          <div
            className="fb-comments"
            data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
            data-width=""
            data-numposts="5"
          />
        </div>
      </Container>
    );
  }
}

export default Content;
