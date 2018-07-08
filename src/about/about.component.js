import React, { Component } from 'react';
import './about.css';
import logo from './IMG_0756.JPG';

class About extends Component {
  render() {  
    return (
      <div className="App">
        What is the weather in the flat?
        <div>
          <img src={logo} className="pi-image" alt="logo" />
        </div>
      </div>
    );
  }
}

export default About;
