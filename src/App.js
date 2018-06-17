import React, { Component } from 'react';
import logo from './logo.svg';
import Weather from './weather/weather.component';
import './App.css';
import Foundation from 'react-foundation';
import { Link, Colors } from 'react-foundation';

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
        <div className="button-colors-example">
          <button type="button" color={Colors.PRIMARY}>Primary Color</button>
          <Link color={Colors.SECONDARY}>Secondary Color</Link>
          <Link color={Colors.SUCCESS}>Success Color</Link>
          <Link color={Colors.ALERT}>Alert Color</Link>
          <Link color={Colors.WARNING}>Warning Color</Link>
          <Link isDisabled>Disabled Button</Link>
        </div>
      </div>
    );
  }
}

export default App;
