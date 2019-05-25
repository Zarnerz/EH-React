import React, { Component } from "react";
import banner from "../../../images/15 - Smash Bros.jpg";

class Background extends Component {
  render() {
    return (
      <section>
        <article>
          <h1>Background</h1>
          <p>
            I began my journey in esports shortly after the release of Halo 3
            with my introduction to MLG and Gamebattles. Up until November 2007
            I was stuck with dial up internet and never had the chance to
            explore Xbox Live before then. Once I started I was hooked and
            started watching MLG broadcasts and getting excited for the upcoming
            Halo 3 season in 2008.
          </p>
          <p>
            Through MLG I got my introduction to esports and began exploring
            other games and events within the esports ecosystem. I watched
            documentaries, followed other scenes such as Starcraft and Melee,
            and eventually started researching the origins of esports.{" "}
          </p>
          <p>
            In college I majored in History and wrote my thesis paper on
            broadcasting structures in esports as compared to sports(was one of
            the only ways I could get my professor to let me write on esports).
            In the years that followed I bounced around to various jobs and
            locations but I never stopped gaming or following esports. I knew I
            wanted to do something in the esports scene and originally I wanted
            nothing else than to become a professional gamer. Ultimately I never
            managed to attain that dream but I always had the idea of doing
            something with the history of esports. After years of
            procrastinating I finally started this journey in 2018 with the
            mission of documenting the rich history of esports and bringing that
            to a wider audience.
          </p>
          <p>
            So I invite you to join me on this journey as we peel back the
            curtains and cover esports in a way that few have done before. As
            time goes on I hope to bring higher quality content and to foster a
            community that loves esports as much as I do.
          </p>
          <p>-Dale 'Zarnerz' Holstein</p>
        </article>
        <aside>
          <img src={banner} alt="the smash brothers documentary banner" />
        </aside>
      </section>
    );
  }
}

export default Background;
