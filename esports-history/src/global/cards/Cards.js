import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <section>
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

const cardImageSource = {
  maxWidth: "300px"
};

export default Cards;
