import React from "react";
import NavBar from "./NavBar";
// import HeaderContent from "./HeaderContent";

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="app-header header-bg">
          <NavBar />
          {this.props.content}
      </div>
    );
  }
}

export default Header;
