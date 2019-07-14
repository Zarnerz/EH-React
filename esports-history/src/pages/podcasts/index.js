import React, { Component } from "react";
import Player from "./player";

class Podcasts extends Component {
  render() {
    return (
      <main>
        <Player source="http://hwcdn.libsyn.com/p/8/a/f/8af468c57789b632/Jocko_Podcast_183_JackCarr.mp3?c_id=45639680&cs_id=45639680&destination_id=454905&expiration=1561759910&hwt=b2d2d27b4bf8e3e5cdaa6d47929b50a0" />
      </main>
    );
  }
}

export default Podcasts;
