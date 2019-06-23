import React from "react";
import { Container } from "react-bootstrap";

class Title extends React.Component {
  render() {
    return (
      <Container>
        <h5 className="h5-masthead montserrat-extrabold color-dark-blue">03</h5>
        <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
          Hướng dẫn đặt hàng{" "}
        </h2>
      </Container>
    );
  }
}

export default Title;
