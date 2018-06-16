import React, { Component } from 'react';
import './weather.css';
import { from } from 'rxjs';

let dataStore;

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
      dataStore = data;
      let result = [];
      console.log(data);
      let storageKeys = Object.keys(data);
      storageKeys.forEach(element => {
        let test1 = {};
        test1[element] = data[element];
        result.push(test1);
      });
      console.log(data);
      let test = JSON.stringify(result);
      let lastTime = JSON.stringify(result[result.length - 1]);
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
