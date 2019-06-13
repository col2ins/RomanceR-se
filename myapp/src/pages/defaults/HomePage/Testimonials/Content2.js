import React from "react"; 
import RBCarousel from "react-bootstrap-carousel";

import {Row, Col, Button} from 'react-bootstrap'

const styles = { height: 400, width: "100%" };

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
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
    rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="container-fluid">
        <Row>
          <Col span={12} style={{ paddingTop: "20px" }}>
            <RBCarousel
              animation={true}
              autoplay={true}
              slideshowSpeed={2000}
              leftIcon={leftIcon}
              rightIcon={rightIcon} 
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
             <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://www.w3schools.com/bootstrap/ny.jpg"
                />
                <div className="carousel-caption">Image</div>
              </div>
              <div style={{ ...styles, backgroundColor: "aqua" }}>
                <video className="carousel-center" controls style={{ width: "75%" }} height="250">
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
                <div className="carousel-caption">Video</div>
              </div>
              <div style={{ height: 400, width: "100%", backgroundColor: "lightpink" }}>
                <div className="carousel-center">center Text</div>
                <div className="carousel-caption">Text</div>
              </div>
            </RBCarousel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Content;