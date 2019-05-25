import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section>
        <h1>Welcome to Esports History</h1>
        <article>
          <h1>Our Mission</h1>
          <p>
            The mission of Esports History is to create a centralized place for
            the rich history of Esports. To research and document as much of
            this history as possible and bring it to fans both new and old.
          </p>
        </article>
        <article>
          <h1>Our Story</h1>
          <p>
            In 2019 Esports history was born after years of toying around with
            the idea. We had a small launch and committed ourselves to putting
            out the best content we could while covering as many topics as
            possbile. We started out by covering the entire history of esports
            in brief. This was a monumental task but provided a baseline for
            which we could move forward. We hope to share our passion of Esports
            and bring its history to as many people as possible.
          </p>
        </article>
      </section>
    );
  }
}

export default About;
