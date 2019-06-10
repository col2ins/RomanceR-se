import React from "react";
import { Container } from "react-bootstrap";

class Title extends React.Component {
  render() {
    return (
      <Container className="text-align-center">
        <h5 className="h5-masthead montserrat-extrabold color-dark-blue">02</h5>
        <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
          Dịch vụ cưới nổi bật
        </h2>
        <p className="h5-masthead montserrat-medium color-dark-75">
          Các dịch vụ chính Romance Rosé cung cấp
        </p>
      </Container>
    );
  }
}

export default Title;
