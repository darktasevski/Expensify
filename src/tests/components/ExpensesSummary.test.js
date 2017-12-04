import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';

/* eslint-disable no-undef */
it('should render ExpenseSummary correctly if there is just one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={99.99 * 100} />, );
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render ExpenseSummary correctly if there is multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expenseTotal={499.99 * 100} />, );
    expect(toJson(wrapper)).toMatchSnapshot();
});
