import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <section style={cardContainerStyle}>
        <article style={cardImageContainer}>
          <img
            style={cardImageStyle}
            src={this.props.image}
            alt={this.props.alt}
          />
        </article>
        <h3 style={cardH3Style}>{this.props.title}</h3>
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

const cardImageStyle = {
  maxWidth: "90%",
  maxHeight: "300px"
};

const cardH3Style = {
  marginTop: "1rem",
  fontSize: "2rem",
  height: "100px"
};

export default Cards;
