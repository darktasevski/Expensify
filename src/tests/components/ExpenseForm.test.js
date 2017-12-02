import React from 'react';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

/* eslint-disable no-undef */
it('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render ExpenseForm with expense data correctly', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render error for incorrect form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find('input')
        .at(0)
        .simulate('change', {
            target: {
                value: 'Description',
            },
        });
    expect(wrapper.state('description')).toBe('Description');
});

it('should set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: {
            value: 'Notes',
        },
    });
    expect(wrapper.state('notes')).toBe('Notes');
});

it('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find('input')
        .at(1)
        .simulate('change', {
            target: {
                value: '1.50',
            },
        });
    expect(wrapper.state('amount')).toBe('1.50');
});

it('should not set amount if invalid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find('input')
        .at(1)
        .simulate('change', {
            target: {
                value: '99.999',
            },
        });
    expect(wrapper.state('amount')).toBe('');
});

it('should call onSubmit prop on valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />, );
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        notes: expenses[0].notes,
        createdAt: expenses[0].createdAt,
    });
});

it('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

it('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    // console.log(wrapper.debug());
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({
        focused,
    });
    expect(wrapper.state('dateFocused')).toBe(true);
});
