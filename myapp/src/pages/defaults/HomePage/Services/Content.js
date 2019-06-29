import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Content extends React.Component {
  render() {
    return (
      <Container>
            {/* <img
              // className="img img-fluid"
              src="./images/services/main/2.1.png"
              style={{ width: "37.5vw", height: "25vw", float: "right" }}
              alt=""
            /> */}
            <div
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
            </div>
      </Container>
    );
  }
}

export default Content;
