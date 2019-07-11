import React from "react";

import Title from "./Title";
import Content from "./Content";

class Services extends React.Component {
  render() {
    return (
      <div
        className="jumbotron-masthead jumbotron-fluid"
        style={{ width: "100%" }}
      >
        <Title />
        <Content />
      </div>
    );
  }
}

export default Services;
