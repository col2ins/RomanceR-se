import React from "react";

import Title from "./Title";
import Content from "./Content";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="jumbotron-masthead jumbotron-fluid bg-very-soft-orange-12-5">
          <Title />
          <Content />
      </div>
    );
  }
}

export default AboutUs;
