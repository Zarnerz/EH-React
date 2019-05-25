import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <section>
        <img src={this.props.image} alt={this.props.alt} />
        <h1>{this.props.title}</h1>
        <p>{this.props.blurb}</p>
      </section>
    );
  }
}

export default Cards;
