import React from "react";
import { Container } from "react-bootstrap";

class Title extends React.Component {
  render() {
    return (
      <Container className="text-align-center">
        <h5 className="h5-masthead montserrat-extrabold color-dark-blue">04</h5>
        <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
          Sản phẩm
        </h2>
      </Container>
    );
  }
}

export default Title;
