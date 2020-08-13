import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
    <Wrapper>
      <Header />
      <Nav />
      <Main />
      <Contact />
      <Portfolio />
      <Footer />
    </Wrapper>
  </div>
  );
}

export default App;
