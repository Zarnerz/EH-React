import React, { Component } from "react";
import Header from "./global/header";
import Carousel from "./global/carousel";
import About from "./pages/main/about";
import Background from "./pages/main/background";
import Podcast from "./pages/main/podcast";
import Footer from "./global/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <About />
        <Background />
        <Podcast />
        <Footer />
      </div>
    );
  }
}

export default App;
