import React, { Component } from "react";
import "./parallax.css";

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = { class: props.class };
  }

  render() {
    return (
      <section class={this.state.class}>
        <article class="parallax-article" />
      </section>
    );
  }
}

export default Parallax;
