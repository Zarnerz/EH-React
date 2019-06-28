import React, { Component } from "react";

export class Player extends Component {
  render() {
    return <audio controls src={this.props.source} />;
  }
}

export default Player;
