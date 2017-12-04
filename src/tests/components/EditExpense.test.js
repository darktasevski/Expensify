import React from 'react';
import { EditExpensePage } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

/* eslint-disable no-undef */

let editExpense;
let removeExpense;
let history;
let wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
        expense={expenses[0]}
    />, );
});

it('renders EditExpensePage without crashing', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
    expect(toJson(wrapper)).toMatchSnapshot();
});
