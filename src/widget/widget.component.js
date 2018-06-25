import React, { Component } from 'react';
import './widget.css';
// let Badge = Foundation.Badge;

var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open("POST", "https://us-central1-userddata.cloudfunctions.net/helloWorld/weathergraph");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = function () {
  console.log('data returned:', xhr.response);
}
var query = `query {
  weather: weather
}`;
xhr.send(JSON.stringify({
  query: query
}));

class Widget extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://us-central1-userddata.cloudfunctions.net/helloWorld/weatherdata').then(async(data) => {
      let result = await data.json();
      // result = JSON.parse(result); 
      // result = result.data.weather[0]; 
      console.log(result);
      result = Object.values(result);
      // result = JSON.parse(result);
      let first = result[result.length - 1];
      let humidity = first.humidity;
      let temperature = first.temperature;
      let pressure = first.pressure;
      this.setState({
        datastate: JSON.stringify(first),
        temperature: temperature,
        pressure: pressure,
        humidity: humidity
      });
    })
  }

  test = 'success';

  render() {
    return (
      <div className="App">
        weather is here! 
        <button className="button">Hello!</button>
        <div className="card sizers">
          <div className="card-divider">
            <h4>Weather Widget just</h4>
          </div>
          <img src="http://downloadicons.net/sites/default/files/cloud-logo-icon-22859.png" alt="cloud" />
          <div className="card-section">
            <p>The latest weather from the flat is, Temperature: {this.state.temperature} Pressure: {this.state.pressure} Humidity: {this.state.humidity}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Widget;
