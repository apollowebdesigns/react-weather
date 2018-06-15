import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './weather.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Weather />, div);
  ReactDOM.unmountComponentAtNode(div);
});
