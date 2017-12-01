import React from 'react';
// import { shallow } from 'enzyme';
import Header from '../../components/Header';

it('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h2').length).toBe(1);
    // expect(wrapper.find('h2').text()).toBe('Expensify');
});
