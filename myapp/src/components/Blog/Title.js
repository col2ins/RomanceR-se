import React from "react";
import { Container } from "react-bootstrap";

class Title extends React.Component {
  render() {
    return (
      <Container className="text-align-center">
        <h5 className="h5-masthead montserrat-extrabold color-dark-blue">06</h5>
        <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
          Cẩm nang cưới
        </h2>
        <p className="h5-masthead montserrat-medium color-dark-75">
          Bí quyết tổ chức thành công lễ cưới hỏi trong mơ của bạn
        </p>
      </Container>
    );
  }
}

export default Title;
