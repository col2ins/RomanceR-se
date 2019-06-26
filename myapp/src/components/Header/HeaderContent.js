import React from "react";
import { Container } from "react-bootstrap";

class HeaderContent extends React.Component {
  render() {
    return (
      <div className="header-content">
        {this.props.content}
        {/* <div className="jumbotron-masthead jumbotron-fluid bg-no-color">
          <Container>
            <h1 className="h1-masthead display-4 playfairdisplay-bolditalic color-very-soft-orange">
              Hello.
              <br />
              We're Romance Rosé.
            </h1>
            <p className="p-masthead-primary lead montserrat-medium color-light-75">
              Đồng hành cùng chúng tôi hiện thực hóa hôn lễ trong mơ của bạn.
            </p>
            <a
              className="btn btn-masthead btn-bd-secondary btn-lg montserrat-semibold color-light margin-top-4th"
              href="/Contact"
              role="button"
            >
              Liên hệ ngay
            </a>
          </Container>
        </div> */}
      </div>
    );
  }
}

export default HeaderContent;
