import React, { Component } from "react";
import logo from "../../images/eSports History-logo-edit.png";
import hamburgerMenu from "../../images/hamburgerMenu.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { menuClass: "" };
  }

  toggleMenuClass = () => {
    if (this.state.menuClass === "") {
      this.setState({
        menuClass: "Toggled"
      });
    } else {
      this.setState({
        menuClass: ""
      });
    }
  };

  render() {
    let navMenuClass = `navMenu${this.state.menuClass}`;
    return (
      <header style={headerStyle}>
        <nav style={navStyle}>
          <a style={navAnchorStyle} href="#home">
            <img src={logo} alt="esports history logo" style={navLogoStyle} />
          </a>
          <ul className={navMenuClass} style={navUlStyle}>
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
          <img
            className="navMenuIcon"
            src={hamburgerMenu}
            alt="responsive bar menu icon"
            onClick={this.toggleMenuClass}
          />
        </nav>
      </header>
    );
  }
}

const headerStyle = {
  maxWidth: "98vw",
  padding: "1rem"
};

const navStyle = {
  display: "flex"
};

const navAnchorStyle = {
  flex: "1",
  display: "flex",
  alignItems: "center"
};

const navUlStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

const navLogoStyle = {
  maxWidth: "225px",
  height: "auto",
  paddingBottom: "1rem"
};

const liStyle = {
  display: "inline"
};

export default Header;
