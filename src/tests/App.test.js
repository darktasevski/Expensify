import React from 'react';
import App from '../App';

it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});

const add = (a, b) => a + b;

it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
});
