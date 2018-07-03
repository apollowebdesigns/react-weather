import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('contains app class', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').length).toEqual(1);
  });

  it('should only have one navbar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Navbar').length).toEqual(1);
  });

  it('should have 3 routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Route').length).toEqual(3);
  });
})

