import React, { Component } from "react";
import logo from "../../images/eSports History-logo-edit.png";

class Header extends Component {
  render() {
    return (
      <header>
        <nav style={navStyle}>
          <a style={navAnchorStyle} href="#home">
            <img src={logo} alt="esports history logo" style={navLogoStyle} />
          </a>
          <ul style={navUlStyle}>
            <li style={liStyle}>
              <a href="#home">Home</a>
            </li>
            <li style={liStyle}>
              <a href="#about">About</a>
            </li>
            <li style={liStyle}>
              <a href="#background">Background</a>
            </li>
            <li style={liStyle}>
              <a href="#podcast">Podcast</a>
            </li>
            <li style={liStyle}>
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

const navAnchorStyle = {
  flex: "1",
  textAlign: "left"
};

const navUlStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "space-around",
  alignSelf: "flex-end"
};

const navLogoStyle = {
  maxWidth: "175px",
  height: "auto",
  marginTop: "7px",
  marginLeft: "30px",
  marginBottom: "5px"
};

const liStyle = {
  display: "inline",
  textDecoration: "none"
};

export default Header;
