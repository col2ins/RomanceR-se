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
              Thư viện ảnh
            </h1>
            <p
              className="p-masthead-primary lead montserrat-medium color-light-75"
              style={{ maxWidth: "87.5%" }}
            >
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </Container>
        </div>
      </div>
    );
  }
}

export default HeaderContent;
