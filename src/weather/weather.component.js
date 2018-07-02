import React, { Component } from 'react';
import './weather.css';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://us-central1-userddata.cloudfunctions.net/helloWorld/weatherdata').then(res => {
      return res.json();
    }).then(data => {
      this.setState({datastate: JSON.stringify(data)});
    })
  }

  render() {
    return (
      <div className="App">
        weather is here! {this.state.datastate}
      </div>
    );
  }
}



export default Weather;
