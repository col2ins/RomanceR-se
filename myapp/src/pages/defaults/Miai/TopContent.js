import React from "react";
import { Container } from "react-bootstrap";

class HeaderContent extends React.Component {
  render() {
    return (
      <div className="header-content">
        {this.props.content}
        <div className="jumbotron-masthead jumbotron-fluid bg-no-color">
          <Container>
            <h1 className="h1-masthead display-4 playfairdisplay-bolditalic color-very-soft-orange">
              Lễ dạm ngõ
            </h1>
            <p
              className="p-masthead-primary lead montserrat-medium color-light-75"
              style={{ maxWidth: "87.5%" }}
            >
              Đây là một phần quan trọng trong nghi lễ cưới truyền thống nhằm
              chính thức hóa quan hệ hôn nhân của hai gia đình.{" "}
            </p>
          </Container>
        </div>
      </div>
    );
  }
}

export default HeaderContent;
