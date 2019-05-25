import React, { Component } from "react";
import logo from "../../images/eSports History-logo-edit.png";

class Header extends Component {
  render() {
    return (
      <header>
        <nav style={navStyle}>
          <a style={navFlexStyle} href="#home">
            <img src={logo} alt="esports history logo" style={navLogoStyle} />
          </a>
          <ul style={navFlexStyle}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#background">Background</a>
            </li>
            <li>
              <a href="#podcast">Podcast</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const navStyle = {
  display: "flex"
};

const navFlexStyle = {
  flex: "1"
};

const navLogoStyle = {
  maxWidth: "175px",
  height: "auto",
  marginTop: "7px",
  marginLeft: "30px",
  marginBottom: "5px"
};

export default Header;
