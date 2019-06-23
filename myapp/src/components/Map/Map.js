import React from "react";

import Content from "./Content";

class Map extends React.Component {
  render() {
    return (
      <div
        className="jumbotron-masthead jumbotron-fluid text-align-left"
        style={{ width: "100%" }}
      >
        <Content />
      </div>
    );
  }
}

export default Map;
