import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

/* eslint-disable no-undef */

let startEditExpense;
let startRemoveExpense;
let history;
let wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage
    startEditExpense={startEditExpense}
    startRemoveExpense={startRemoveExpense}
    history={history}
    expense={expenses[0]}
  />, );
});

it('renders EditExpensePage without crashing', () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(
    expenses[0].id,
    expenses[0],
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
  expect(toJson(wrapper)).toMatchSnapshot();
});
