import React from 'react';
import { shallow } from 'enzyme';
import App from './App'

describe('Testing Timer App', () => {
  test('renders the div element Text', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').text()).toContain("React-Timer-App");
  });

  test('Checking div element ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  });
  
});




//shallow don't go inside