import React, { Component } from "react";
import Article from "../article";

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
          <Article title={article.title} content={article.content} />
        ))}
      </section>
    );
  }
}

export default Posts;
