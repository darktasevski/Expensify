// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../App';

// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
// });

const add = (a, b) => a + b;

it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
});
