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
        <h1>{this.props.title}</h1>
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

export default Cards;
