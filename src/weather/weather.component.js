import React, { Component } from 'react';
import './weather.css';
import { Observable } from 'rxjs';

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
      let observed = Observable.create(data);
      observed.subscribe(d => console.log(d));
      let test = JSON.stringify(data);
      this.setState({datastate: test});
      // console.log(data)
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
