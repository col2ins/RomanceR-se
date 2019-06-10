import React from "react";
import { Container } from "react-bootstrap";

class Title01 extends React.Component {
  render() {
    return (
      <Container>
        <div className="text-align-center">
          <h5 className="h5-masthead montserrat-extrabold color-dark-blue">
            01
          </h5>
          <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
            Lễ ăn hỏi{" "}
          </h2>
          <p className="h5-masthead montserrat-medium color-dark-75">
            Một trong 3 nghi lễ quan trọng trong thủ tục cưới hỏi Việt Nam{" "}
          </p>
        </div>
      </Container>
    );
  }
}

export default Title01;
