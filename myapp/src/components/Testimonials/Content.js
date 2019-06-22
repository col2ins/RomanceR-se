import React from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import { Container, Row, Col } from "react-bootstrap";

class Content extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  render() {
    return (
      <Container>
        <Row className="margin-top-secondary">
          <Col>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
              <div style={{}}>
                <img
                  style={{ height: "200px" }}
                  src="./images/testimonials/avatar (1).png"
                  alt="First slide"
                />
                <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                <p className="h2-masthed montserrat-medium color-dark-75"  style={{ paddingTop: "1.25rem"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>{" "}
                <p className="montserrat-semibold color-dark-blue">
                  Mạnh Trường & Nhã Vy
                </p>
                </Col>
              </div>
              <div style={{}}>
                <img
                  style={{ height: "200px" }}
                  src="./images/testimonials/avatar (1).png"
                  alt="Second slide"
                />
                <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                <p className="h2-masthed montserrat-medium color-dark-75"  style={{ paddingTop: "1.25rem"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>{" "}
                <p className="montserrat-semibold color-dark-blue">
                  Mạnh Trường & Nhã Vy
                </p>
                </Col>
              </div>
              <div style={{}}>
                {/* <img
                  style={{ height: "200px" }}
                  src="./images/testimonials/avatar (1).png"
                  alt="Third slide"
                /> */}
                <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                <p className="h2-masthed montserrat-medium color-dark-75"  style={{ paddingTop: "1.25rem"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>{" "}
                <p className="montserrat-semibold color-dark-blue">
                  Mạnh Trường & Nhã Vy
                </p>
                </Col>
              </div>
            </RBCarousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
