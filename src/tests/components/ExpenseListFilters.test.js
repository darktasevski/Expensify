import React from 'react';
import moment from 'moment';
import { filters, altFilters } from '../fixtures/filters';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';

/* eslint-disable no-undef */
let wrapper;
let setTextFilter;
let sortByDate;
let sortByAmount;
let setStartDate;
let setEndDate;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />, );
});

it('should render ExpenseListFilters correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({ filters: altFilters });
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('should handle text change', () => {
    const value = 'test';
    wrapper.find('input').simulate('change', {
        target: {
            value,
        },
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

it('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', {
        target: {
            value,
        },
    });
    expect(sortByDate).toHaveBeenCalled();
});
it('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {
            value,
        },
    });
    expect(sortByAmount).toHaveBeenCalled();
});
it('should should handle date changes', () => {
    const startDate = moment(0).add(5, 'years');
    const endDate = moment(0).add(10, 'years');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate,
        endDate,
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
it('should should handle date focus changes', () => {
    const focusedInput = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focusedInput, );
    expect(wrapper.state('focusedInput')).toBe(focusedInput);
});
