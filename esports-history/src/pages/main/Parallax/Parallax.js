import React, { Component } from "react";
import "./parallax.css";

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = { class: props.class };
  }

  render() {
    return (
      <section className={this.state.class}>
        <article className="parallax-article" />
      </section>
    );
  }
}

export default Parallax;
