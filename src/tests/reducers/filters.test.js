import moment from 'moment';
import filtersReducer from '../../reducers/filters';

it('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

it('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

it('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: null,
        endDate: null,
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

it('should set text filter', () => {
    const text = 'Test value';
    const action = { type: 'SET_TEXT_FILTER', text };
    const state = filtersReducer(undefined, action);
    expect(action.text).toBe('Test value');
});

it('should set startDate filter', () => {
    const startDate = moment(100).valueOf();
    const action = { type: 'SET_START_DATE', startDate };
    const state = filtersReducer(undefined, action);
    expect(action.startDate).toBe(startDate);
});

it('should set endDate filter', () => {
    const endDate = moment(10000).valueOf();
    const action = { type: 'SET_END_DATE', endDate };
    const state = filtersReducer(undefined, action);
    expect(action.endDate).toBe(endDate);
});
