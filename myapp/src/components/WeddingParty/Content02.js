import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class Content02 extends React.Component {
  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      1024: {
        items: 3
      }
    };

    return (
      <Container>
        {" "}
        <Row className="margin-top-secondary">
          <Col>
            <AliceCarousel
              duration={400}
              autoPlay={true}
              startIndex={1}
              fadeOutAnimation={true}
              mouseDragEnabled={true}
              playButtonEnabled={false}
              buttonsDisabled={true}
              dotsDisabled={true}
              responsive={responsive}
              autoPlayInterval={3000}
              autoPlayDirection="rtl"
              autoPlayActionDisabled={true}
              onSlideChange={this.onSlideChange}
              onSlideChanged={this.onSlideChanged}
            >
              <div className="yours-custom-class">
                <h2>1</h2>
              </div>
              <div className="yours-custom-class">
                <h2>2</h2>
              </div>
              <div className="yours-custom-class">
                <h2>3</h2>
              </div>
              <div className="yours-custom-class">
                <h2>4</h2>
              </div>
              <div className="yours-custom-class">
                <h2>5</h2>
              </div>
            </AliceCarousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content02;
