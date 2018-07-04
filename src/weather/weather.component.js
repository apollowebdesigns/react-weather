import React, { Component } from 'react';
import './weather.css';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);

let myDataSource = {
  chart: {
    caption: 'Temperatures in the flat',
    subCaption: 'Top 5 stores in last month by revenue',
    numberPrefix: '$',
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
      dataSource: [],
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://us-central1-userddata.cloudfunctions.net/helloWorld/weatherdata').then(res => {
      return res.json();
    }).then(data => {
      this.setState({datastate: JSON.stringify(data)});
      Object.values(data).forEach(item => console.log(item));
      myDataSource.data.forEach(value => value.value = "100000");
      this.setState({ isLoading: false, dataSource: myDataSource });
    })
  }

  render() {
    console.log('the state is');
    console.log(this.state);
    return (
      <div className="App">
        <ReactFC {...chartConfigs} dataSource={this.state.dataSource} />
        weather is here! {this.state.datastate}
      </div>
    );
  }
}



export default Weather;
