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
          <ul>
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

export default Header;
