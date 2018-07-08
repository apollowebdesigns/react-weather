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
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    this.setState({ isLoading: true });
    fetch('https://us-central1-userddata.cloudfunctions.net/helloWorld/dailyaverage').then(res => {
      return res.json();
    }).then(data => {
      this.setState({datastate: JSON.stringify(data)});
      myDataSource.data = [];
      console.log(data);
      for(let i = 0; i < data.length; i++) {
        let observation = data[i];
        let key = Object.keys(observation)[0];
        console.log(observation);
        let displayedTemperature = observation[key];
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
      chartConfigs.width = this.state.width;
      this.setState({ isLoading: true });
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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
