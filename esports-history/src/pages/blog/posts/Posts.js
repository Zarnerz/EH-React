import React, { Component } from "react";

class Posts extends Component {
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

  render() {
    return (
      <section>
        {this.state.articles.map(article => (
          <table>
            <tr>
              <th>
                <a href="/article">{article.title}</a>
              </th>
            </tr>
            <tr>
              <td>{article.content}</td>
            </tr>
          </table>
        ))}
      </section>
    );
  }
}

export default Posts;
