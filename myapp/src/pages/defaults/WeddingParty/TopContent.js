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
              Lễ cưới
            </h1>
            <p
              className="p-masthead-primary lead montserrat-medium color-light-75"
              style={{ maxWidth: "87.5%" }}
            >
              Nghi lễ chính thức hóa danh phận làm vợ làm con dâu cho cô
              gái và vai trò làm chồng, làm rể của chàng trai với hai
              bên gia đình họ tộc.{" "}
            </p>
          </Container>
        </div>
      </div>
    );
  }
}

export default HeaderContent;
