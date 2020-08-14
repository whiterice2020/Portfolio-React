import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import Styles from "./components/styles.css";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
