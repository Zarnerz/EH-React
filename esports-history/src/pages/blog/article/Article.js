import React, { Component } from "react";

class Article extends Component {
  render() {
    console.log(this.props);
    return (
      <table>
        <tr>
          <th>{this.props.title}</th>
        </tr>
        <tr>
          <td>{this.props.content}</td>
        </tr>
      </table>
    );
  }
}

export default Article;
