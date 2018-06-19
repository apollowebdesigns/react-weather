import React, { Component } from 'react';
import logo from './logo.svg';
import Weather from './weather/weather.component';
import './App.css';
import Foundation from 'react-foundation';
import { Link, Colors } from 'react-foundation';
import Widget from './widget/widget.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Weather /> 
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Widget />
      </div>
    );
  }
}

export default App;
