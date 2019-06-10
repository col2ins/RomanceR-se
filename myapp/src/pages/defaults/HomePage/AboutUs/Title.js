import React from "react";
import { Container } from "react-bootstrap";

class Title extends React.Component {
  render() {
    return (
      <Container className="text-align-center">
        <h5 className="h5-masthead montserrat-extrabold color-dark-blue">01</h5>
        <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
          Tại sao lại là Romance Rosé?
        </h2>
        <p className="h5-masthead montserrat-medium color-dark-75">
          Romance Rosé - Nơi đặt niềm tin của bạn
        </p>
      </Container>
    );
  }
}

export default Title;
