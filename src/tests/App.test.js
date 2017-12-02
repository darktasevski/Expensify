import React from 'react';
import App from '../App';
/* eslint-disable no-undef */

it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
});
