import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

// Global Components
import Header from "./global/header";
import Footer from "./global/footer";

// Pages
import Main from "./pages/main";
import Podcasts from "./pages/podcasts";

// Styles
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Main} />
          <Route path="/podcasts" component={Podcasts} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
