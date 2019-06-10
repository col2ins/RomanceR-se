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
              Lễ ăn hỏi
            </h1>
            <p
              className="p-masthead-primary lead montserrat-medium color-light-75"
              style={{ maxWidth: "87.5%" }}
            >
              Đây là là thời điểm nhà trai đem lễ vật sang nhà gái để xin kết
              duyên cho đôi uyên ương.
            </p>
          </Container>
        </div>
      </div>
    );
  }
}

export default HeaderContent;
