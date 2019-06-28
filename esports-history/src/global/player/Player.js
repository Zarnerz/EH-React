import React, { Component } from "react";

export class Player extends Component {
  state = {
    selectedTrack: null
  };

  render() {
    const list = [
      { id: 1, title: "Introduction" },
      { id: 2, title: "Final Boss" }
    ].map(item => {
      return (
        <li
          key={item.id}
          onClick={() => this.setState({ selectedTrack: item.title })}
        >
          {item.title}
        </li>
      );
    });
    return <ul>{list}</ul>;
  }
}

export default Player;
