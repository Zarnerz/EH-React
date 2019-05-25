import React, { Component } from "react";
import Card from "../../../global/cards";
import logo from "../../../images/eSports History-logo-edit";
import finalBossImage from "../../../images/13 - MLG FB MONEY";
import twinGalaxiesImage from "../../../images/27 - Twin Galaxies";

class Podcast extends Component {
  render() {
    const introBlurb =
      "The first episode of the Esports History Podcast that covers the entire history of esports. This is a great introduction to the world of esports and we highly recommend starting here.";
    const finalBossBlurb = `Long episode chronicalling the most dominant team in competetive Halo history "Final Boss" with special guest "Ogre
				2" who was one of the members of this legendary team. From their early day's before they were officially known as "Final
				Boss" until their last official tournament we talk about all the twists and turns through the years. This is a must see
                video for any fans of the team or Halo esports.`;
    const twinGalaxiesBlurb = `One of our biggest projects yet that covers the long history of Twin Galaxies and its role in the beginnings of competitve
				video gaming. Another must see piece of content that gives any esports fan some perspective on how far we've come.`;

    return (
      <section>
        <h1>Podcast Episodes</h1>
        <Card
          image={logo}
          alt="esports history logo"
          title="The Entire History of Esports in Brief"
          blurb={introBlurb}
        />
        <Card
          image={finalBossImage}
          alt="final boss holding a check after winning the 2007 national championship in halo 2"
          title="Final Boss - A Halo Dynasty"
          blurb={finalBossBlurb}
        />
        <Card
          image={twinGalaxiesImage}
          alt="twin galaxies international scoreboard with many world record holders in the foreground"
          title="Twin Galaxies - An Esports Origin Story"
          blurb={twinGalaxiesBlurb}
        />
      </section>
    );
  }
}

export default Podcast;
