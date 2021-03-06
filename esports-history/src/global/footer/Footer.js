import React, { Component } from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
class Footer extends Component {
  render() {
    return (
      <footer id="contact" style={footerStyle}>
        <p style={footerCopyrightStyle}>&copy; 2019 Esports History</p>
        <ul style={footerUlStyle}>
          <li style={liStyle}>
            <a href="github.com">
              <FaGithub />
            </a>
          </li>
          <li style={liStyle}>
            <a href="linkedin.com">
              <FaLinkedin />
            </a>
          </li>
          <li style={liStyle}>
            <a href="twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li style={liStyle}>
            <a href="instagram.com">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

const footerStyle = {
  display: "flex",
  maxWidth: "100vw",
  backgroundColor: "#aaa",
  padding: "1rem"
};

const footerCopyrightStyle = {
  flex: "1",
  textAlign: "left",
  marginLeft: "2rem",
  fontSize: "1.4rem"
};

const footerUlStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "space-around",
  alignSelf: "flex-end"
};

const liStyle = {
  display: "inline",
  textDecoration: "none"
};

export default Footer;
