import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import carouselImg1 from "../../images/1.jpg";
import carouselImg2 from "../../images/6 - Life.jpg";
import carouselImg3 from "../../images/3.jpg";
import carouselImg4 from "../../images/22 - Evo 2004.jpg";
import carouselImg5 from "../../images/13 - MLG FB MONEY.jpg";
import carouselImg6 from "../../images/17 - SC1.jpg";
import carouselImg7 from "../../images/19 - WCG.jpg";
import carouselImg8 from "../../images/2.jpg";

export default () => (
  <Carousel autoPlay>
    <div>
      <img src={carouselImg1} alt="trophy with stage and lights" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src={carouselImg2} alt="life magazine article on arcades" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img
        src={carouselImg3}
        alt="view from competitors back facing large crowd"
      />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src={carouselImg4} alt="evo 2004 famous daigo parry" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img
        src={carouselImg5}
        alt="final boss holding national championship check"
      />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img src={carouselImg6} alt="starcraft 1 event in south korea" />
      <p className="legend">Legend 6</p>
    </div>
    <div>
      <img src={carouselImg7} alt="wcg banner with logo and multiple games" />
      <p className="legend">Legend 7</p>
    </div>
    <div>
      <img src={carouselImg8} alt="arena with main stage and big screen" />
      <p className="legend">Legend 8</p>
    </div>
  </Carousel>
);
