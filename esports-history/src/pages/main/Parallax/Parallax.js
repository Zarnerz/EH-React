import React, { Component } from "react";

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundImage: `../../../images/${props.image}` };
  }

  render() {
    const backgroundStyle = {
      background: this.state.backgroundImage
    };

    return (
      <section>
        <article style={backgroundStyle} />
      </section>
    );
  }
}

export default Parallax;
