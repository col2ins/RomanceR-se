import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Content01 extends React.Component {
  render() {
    return (
      <Container>
        <div className="text-align-center">
          <h5 className="h5-masthead montserrat-extrabold color-dark-blue">
            01
          </h5>
          <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
            Về chúng tôi
          </h2>
          <p className="h5-masthead montserrat-medium color-dark-75">
            Top 10 Wedding Planner 2015-2017-2018{" "}
          </p>
        </div>
        <Row className="jumbotron-masthead-1 jumbotron-fluid margin-top-secondary" style={{ textAlign: "left" }}>
          <Col md={6} sm={6}>
            <p className="montserrat-medium color-dark-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              hendrerit magna nec ipsum porttitor, sed posuere nunc venenatis.
              Vestibulum non pulvinar nulla. Morbi id bibendum leo. Duis ac
              augue euismod, tempus velit non, rutrum ipsum. Fusce nec nunc sed
              nisi tempus vulputate ac quis sem. Sed dapibus purus ac elementum
              elementum. Vivamus molestie mollis eros, at aliquam ipsum finibus
              a. In diam purus, ornare et felis id, aliquam tempor est.
              Curabitur ornare volutpat tortor a molestie. Morbi pharetra, mi
              sit amet fermentum malesuada, ex odio laoreet neque, vitae blandit
              justo dui lobortis magna.
            </p>
          </Col>
          <Col md={6} sm={6}>
            <p className="montserrat-medium color-dark-75">
              Praesent a pretium arcu. Vivamus id venenatis orci. Maecenas
              consectetur diam sit amet augue dapibus suscipit. Morbi sit amet
              urna ante. Maecenas dolor felis, gravida eget ornare nec, iaculis
              in ex. Fusce vehicula, dui a pellentesque congue, elit enim
              commodo magna, vitae sodales sem felis sit amet ligula.
              Suspendisse eleifend diam vel nisl pellentesque volutpat. Integer
              non tellus lacinia, rhoncus lectus vestibulum, rutrum lacus. Nulla
              bibendum orci arcu, sit amet vehicula est blandit non. Aenean
              ultrices libero ut massa molestie, a suscipit est commodo. Ut
              congue convallis luctus.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content01;
