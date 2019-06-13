import React from "react";

import Title from "./Title";
import Content from "./Content";

class Testimonials extends React.Component {
  render() {
    return (
      // <div>
      //   <Content />
      // </div>
      <div className="jumbotron-masthead jumbotron-fluid img-bg-testimonials">
          <Title />
          <Content />
      </div>
    );
  }
}

export default Testimonials;
