import React, { Component } from "react";

export class Posts extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        { title: "title1", content: "content1" },
        { title: "title2", content: "content2" },
        { title: "title3", content: "content3" }
      ]
    };
  }

  renderArticles = () => {
    this.state.articles.forEach(article => {
      console.log(article);
      return (
        <table>
          <tr>
            <th>{article.title}</th>
          </tr>
          <tr>
            <td>{article.content}</td>
          </tr>
        </table>
      );
    });
  };

  render() {
    return <main>{this.renderArticles}</main>;
  }
}

export default Posts;
