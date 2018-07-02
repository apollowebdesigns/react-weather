import React, { Component } from 'react';
import './widget.css';

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
      result = Object.values(result);
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
