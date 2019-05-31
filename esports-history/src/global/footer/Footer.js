import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer style={footerStyle}>
        <p style={footerCopyrightStyle}>&copy; 2019 Esports History</p>
        <ul style={footerUlStyle}>
          <li style={liStyle}>
            <a href="#">Email</a>
          </li>
          <li style={liStyle}>
            <a href="#">LinkedIn</a>
          </li>
          <li style={liStyle}>
            <a href="#">Github</a>
          </li>
          <li style={liStyle}>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </footer>
    );
  }
}

const footerStyle = {
  display: "flex",
  maxWidth: "98vw"
};

const footerCopyrightStyle = {
  flex: "1",
  textAlign: "left",
  marginLeft: "2rem"
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
