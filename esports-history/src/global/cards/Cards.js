import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <section style={cardContainerStyle}>
        <article style={cardImageContainer}>
          <img
            style={cardImageSource}
            src={this.props.image}
            alt={this.props.alt}
          />
        </article>
        <h3 style={cardH3Stle}>{this.props.title}</h3>
        <p>{this.props.blurb}</p>
      </section>
    );
  }
}

const cardContainerStyle = {
  maxWidth: "90vw",
  padding: "1rem"
};

const cardImageContainer = {
  height: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const cardImageSource = {
  maxWidth: "90%"
};

const cardH3Stle = {
  marginTop: "0",
  fontSize: "2rem",
  height: "100px"
};

export default Cards;
