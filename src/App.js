import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Work" component={Work} />
            <Route path="/Contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
