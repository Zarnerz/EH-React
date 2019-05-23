import React, { Component } from "react";
import Header from "./global/header";
import Footer from "./global/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
