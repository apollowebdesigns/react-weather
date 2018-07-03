import React, { Component } from 'react';
import logo from './sun-icon-md.png';
import Weather from './weather/weather.component';
import './App.css';
import Widget from './widget/widget.component';
import About from './about/about.component';
import Navbar from './navbar/navbar.component';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">What's the Weather?</h1>
        </header>
        <Navbar />
        <Route
          exact
          path="/weather"
          render={() => <Weather />}
        />
        <Route
          exact
          path="/widget"
          render={() => <Widget/>}
        />
        <Route
          exact
          path="/about"
          render={() => <About/>}
        />
      </div>
    );
  }
}

export default App;
