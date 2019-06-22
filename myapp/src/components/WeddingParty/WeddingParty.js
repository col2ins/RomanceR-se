import React from "react";

import Title01 from "./Title01";
import Content01 from "./Content01";
import Title02 from "./Title02";
// import Content02 from "./Content02";

class WeddingParty extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron-masthead jumbotron-fluid">
          <Title01 />
          <Content01 />
        </div>
        <div className="jumbotron-masthead jumbotron-fluid bg-very-soft-orange-12-5" style={{ marginBottom: "6.25rem"}}>
          <Title02 />
          {/* <Content02 /> */}
        </div>
      </div>
    );
  }
}

export default WeddingParty;
