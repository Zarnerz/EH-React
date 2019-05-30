import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <section style={cardContainerStyle}>
        <img
          style={cardImageSource}
          src={this.props.image}
          alt={this.props.alt}
        />
        <h1>{this.props.title}</h1>
        <p>{this.props.blurb}</p>
      </section>
    );
  }
}

const cardContainerStyle = {
  maxWidth: "90vw"
};

const cardImageSource = {
  maxWidth: "90%"
};

export default Cards;
