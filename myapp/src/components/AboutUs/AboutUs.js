import React from "react";

import Content01 from "./Content01";
import Content02 from "./Content02";
import Content03 from "./Content03";
import Content04 from "./Content04";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="jumbotron-masthead jumbotron-fluid">
          <Content01 />
          <Content02 />
          <Content03 />
          <Content04 />
      </div>
    );
  }
}

export default AboutUs;