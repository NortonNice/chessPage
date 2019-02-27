import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Alekhine from '../src/components/Alekhine/Alekhine';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Alekhine />
      </div>
    );
  }
}

export default App;
