import React from "react";
import { Container } from "react-bootstrap";

class Title01 extends React.Component {
  render() {
    return (
      <Container>
        <div className="text-align-center">
          <h5 className="h5-masthead montserrat-extrabold color-dark-blue">
            02
          </h5>
          <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
            Báo giá bộ tráp lễ dạm ngõ{" "}
          </h2>
          <p className="h5-masthead montserrat-medium color-dark-75">
            Để biết thêm thông tin chi tiết, vui lòng liên hệ hotline: <b>1800-6868</b>{" "}
          </p>
        </div>
      </Container>
    );
  }
}

export default Title01;
