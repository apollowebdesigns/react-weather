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
      let result = [];
      data = data.data.weather;
      console.log(data);
      data = JSON.parse(data);
      let storageKeys = Object.keys(data);
      storageKeys.forEach(element => {
        let test1 = {};
        test1[element] = data[element];
        result.push(test1);
      });
      result = data;
      let result2 = [];
      result2.push(data);
      console.log(data);
      let lastTime = JSON.stringify(result2[0][0]);
      this.setState({datastate: lastTime});
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
