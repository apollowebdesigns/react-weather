import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
        <div className="menu">
            <a className="button" href="/#/weather">weather</a>
            <a className="button" href="/#/widget">widget</a>
            <a className="button" href="/#/forecast">forecast</a>
            <a className="button" href="/#/about">about</a>
        </div>
    );
  }
}

export default Navbar;
