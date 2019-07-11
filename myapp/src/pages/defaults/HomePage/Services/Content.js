import React from "react";
import { Container } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class Content extends React.Component {
  render() {
    return (
      <Container style={{ width: "100%" }}>
        <ScrollAnimation animateIn="bounceInRight">
          <div style={{ textAlign: "right" }}>
            {" "}
            <img
              className="img img-fluid margin-top-secondary"
              src="./images/services/main/services (1).png"
              style={{ width: "75%" }}
              alt=""
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInLeft">
          <div style={{ textAlign: "left" }}>
            {" "}
            <img
              className="img img-fluid margin-top-secondary"
              src="./images/services/main/services (2).png"
              style={{ width: "75%" }}
              alt=""
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight">
          <div style={{ textAlign: "right" }}>
            <img
              className="img img-fluid margin-top-secondary"
              src="./images/services/main/services (3).png"
              style={{ width: "75%" }}
              alt=""
            />
          </div>
        </ScrollAnimation>
        {/* <div
              style={{
                border: "0.5vw solid #edb29b",
                padding: "0.625rem",
                width: "30vw",
                // height: "20vw"
              }}
            >
              <div
                style={{
                  // margin: "0.625rem",
                  padding: "0.9375rem",
                  background: "#343a40",
                  textAlign: "left"
                  // width: "27.75vw",
                  // height: "18.5vw"
                }}
              >
                <h5 className="montserrat-semibold color-light">
                  Dịch vụ cưới hỏi trọn gói
                </h5>
                <p
                  className="montserrat-medium color-light"
                  style={{ marginBottom: "0" }}
                >
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Class aptent taciti sociosqu
                  ad litora torquent per conubia nostra, per inceptos himenaeos.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.{" "}
                </p>
              </div>
            </div> */}
      </Container>
    );
  }
}

export default Content;
