import moment from 'moment';
import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate,
} from '../../actions/filters';

/* Set start and end date test */

it('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0),
    });
});

it('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0),
    });
});

it('should generate set start date action object without provided date', () => {
    const action = setStartDate();
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: null,
    });
});

it('should generate set end date action object without provided value', () => {
    const action = setEndDate();
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: null,
    });
});

/* Set text filter test */

it('should generate set text filter action object with text value', () => {
    const action = setTextFilter('test');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test',
    });
});

it('should generate set text filter action object without text value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '',
    });
});

/* sort by date and amoun */

it('should generate action object for sort by amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

it('should generate action object for sort by date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});
