import React from 'react';
import { AddExpensePage } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';
/* eslint-disable no-undef */

let addExpense;
let history;
let wrapper;

// Jest will run this before each test
beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />, );
});

it('should render AddExpense page correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('should handle addExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[2]);
    expect(toJson(wrapper)).toMatchSnapshot();
});
