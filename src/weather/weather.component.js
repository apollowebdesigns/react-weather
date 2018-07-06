import React, { Component } from 'react';
import './weather.css';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);

let myDataSource = {
  chart: {
    caption: 'Temperatures in the flat',
    subCaption: 'Last 15 reading',
  },
  data: [
    {
      label: 'Bakersfield Central',
      value: '880000',
    },
    {
      label: 'Garden Groove harbour',
      value: '730000',
    },
    {
      label: 'Los Angeles Topanga',
      value: '590000',
    },
    {
      label: 'Compton-Rancho Dom',
      value: '520000',
    },
    {
      label: 'Daly City Serramonte',
      value: '330000',
    },
  ],
};

let chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: myDataSource,
};

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
      myDataSource.data = [];
      for(let i = data.length - 1; i > data.length - 15; i--) {
        let observation = data[i];
        let key = Object.keys(observation)[0];
        let displayedTemperature = observation[key].temperature;
        let displayedObservation = {};
        displayedObservation.label = key;
        displayedObservation.value = Math.round(displayedTemperature);
        myDataSource.data.push(displayedObservation);
      }
      myDataSource.data = myDataSource.data.reverse();
      console.log(myDataSource.data);
      // data.forEach(observation => {
      //   let key = Object.keys(observation)[0];
      //   let displayedTemperature = observation[key].temperature;
      //   let displayedObservation = new Object();
      //   displayedObservation.label = key;
      //   displayedObservation.value = Math.round(displayedTemperature);
      //   myDataSource.data.push(displayedObservation);
      // })
      // myDataSource.data.forEach(item => {
      //   item.label = "2018-05-30T08:00:45";
      //   item.value = "100000";
      // });
      this.setState({ isLoading: false });
    })
  }

  render() {
    return (
      <div className="App row">
        <ReactFC {...chartConfigs} />
        {/* weather is here! {this.state.datastate} */}
      </div>
    );
  }
}



export default Weather;
