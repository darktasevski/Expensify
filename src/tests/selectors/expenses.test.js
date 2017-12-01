import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

it('should filter by text value', () => {
    const filters = {
        text: 'le',
        sortBy: 'date',
        startDate: null,
        endDate: null,
    };
    const results = getVisibleExpenses(expenses, filters);
    expect(results).toEqual([expenses[1]]);
});

it('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: null,
    };
    const results = getVisibleExpenses(expenses, filters);
    expect(results).toEqual([expenses[2], expenses[0]]);
});

it('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: null,
        endDate: moment(0),
    };
    const results = getVisibleExpenses(expenses, filters);
    expect(results).toEqual([expenses[0], expenses[1]]);
});

it('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: null,
        endDate: null,
    };
    const results = getVisibleExpenses(expenses, filters);
    expect(results).toEqual([expenses[2], expenses[0], expenses[1]]);
});

it('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: null,
        endDate: null,
    };
    const results = getVisibleExpenses(expenses, filters);
    expect(results).toEqual([expenses[1], expenses[2], expenses[0]]);
});
