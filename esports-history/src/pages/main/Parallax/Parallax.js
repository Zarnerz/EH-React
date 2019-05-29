import React, { Component } from "react";

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundImage: `../../../images/${props.image}` };
  }

  render() {
    // const backgroundStyle = {
    //   backgroundImage: `url("${this.state.backgroundImage}")`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundAttachment: "fixed",
    //   backgroundSize: "100%",
    //   backgroundPosition: "50%"
    // };

    return (
      <section class="background-style">
        <article style={articleStyle} />
      </section>
    );
  }
}

const articleStyle = {
  paddingTop: "90px",
  paddingBottom: "300px"
};

export default Parallax;
