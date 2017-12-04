import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: null,
    endDate: null,
};
const altFilters = {
    text: 'bill',
    sortBy: 'amount',
    startDate: moment(1000000),
    endDate: moment(1000000).add(3, 'days'),
};

export { filters, altFilters };
