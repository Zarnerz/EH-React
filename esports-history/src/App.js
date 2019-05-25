import React, { Component } from "react";
import Header from "./global/header";
import About from "./pages/main/about";
import Background from "./pages/main/background";
import Footer from "./global/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Background />
        <Footer />
      </div>
    );
  }
}

export default App;
