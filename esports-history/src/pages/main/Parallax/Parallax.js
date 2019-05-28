import React, { Component } from "react";

class Parallax extends Component {
  componentDidMount = props => {
    console.log(props);
  };

  render() {
    return (
      <section>
        <article>{/* Insert Background Image for Parallax Section */}</article>
      </section>
    );
  }
}

export default Parallax;
