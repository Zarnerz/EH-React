import React, { Component } from "react";
import Header from "./global/header";
import Main from "./pages/main";
import Footer from "./global/footer";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
