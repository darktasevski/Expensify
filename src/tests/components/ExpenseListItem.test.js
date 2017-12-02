import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
/* eslint-disable no-undef */

it('should render ExpenseListItem', () => {
    const wrapper = shallow(<ExpenseListItem key={expenses[1].id} {...expenses[1]} />, );
    expect(toJson(wrapper)).toMatchSnapshot();
});
