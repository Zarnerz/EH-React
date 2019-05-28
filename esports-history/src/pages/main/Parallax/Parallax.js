import React, { Component } from "react";

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundImage: `../../../images/${props.image}` };
  }

  render() {
    const backgroundStyle = {
      backgroundImage: this.state.backgroundImage,
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "100%",
      backgroundPosition: "50%"
    };

    return (
      <section style={backgroundStyle}>
        <article />
      </section>
    );
  }
}

export default Parallax;
