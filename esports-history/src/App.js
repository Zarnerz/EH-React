import React, { Component } from "react";
import Header from "./global/header";
import Carousel from "./global/carousel";
import Parallax from "./pages/main/parallax";
import About from "./pages/main/about";
import Background from "./pages/main/background";
import Podcast from "./pages/main/podcast";
import Footer from "./global/footer";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <About />
        <Parallax image="test" />
        <Background />
        <Podcast />
        <Footer />
      </div>
    );
  }
}

export default App;
