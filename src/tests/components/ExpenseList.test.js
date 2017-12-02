import React from 'react';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
/* eslint-disable no-undef */
it('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render ExpenseList without expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});
