import React, { Component } from 'react';
import './widget.css';
import { from } from 'rxjs';
import { Button } from 'react-foundation/lib/components/button';
import { dispatch } from 'rxjs/internal/observable/pairs';
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

let dataStore;

class Widget extends Component {
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
      let result = data.data.weather;
      result = JSON.parse(result);
      console.log(result);
      let first = result[result.length - 1];

      this.setState({datastate: JSON.stringify(first)});
    })
  }

  render() {
    return (
      <div className="App">
        weather is here! {this.state.datastate}
        <button className="button">Hello!</button>
        <div className="card sizers">
          <div className="card-divider">
            <h4>Weather Widget</h4>
          </div>
          <img src="http://downloadicons.net/sites/default/files/cloud-logo-icon-22859.png" />
          <div className="card-section">
            <p>The latest weather from the flat is:</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Widget;
