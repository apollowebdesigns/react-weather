import React, { Component } from 'react';
import './weather.css';
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

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://us-central1-userddata.cloudfunctions.net/helloWorld/weathergraph', {
      body: JSON.stringify({
        query: query
      }), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    }).then(res => {
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
