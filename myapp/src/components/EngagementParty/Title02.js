import React from "react";
import { Container } from "react-bootstrap";

class Title02 extends React.Component {
  render() {
    return (
      <Container>
        <div className="text-align-center">
          <h5 className="h5-masthead montserrat-extrabold color-dark-blue">
            02
          </h5>
          <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
            Báo giá trang trí tại nhà ngày cưới - hỏi{" "}
          </h2>
          <p className="h5-masthead montserrat-medium color-dark-75">
            Để biết thêm thông tin chi tiết, vui lòng liên hệ hotline:{" "}
            <b style={{ fontSize: "larger" }}>1800-6868</b>{" "}
          </p>
        </div>
      </Container>
    );
  }
}

export default Title02;
