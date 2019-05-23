import React, { Component } from "react";
import logo from "../../images/eSports History-logo-edit.png";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <a href="#home">
            <img src={logo} alt="esports history logo" />
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
