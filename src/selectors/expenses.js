import moment from 'moment';

const getVisibleExpenses = (expenses, {
    text, sortBy, startDate, endDate
}) =>
    expenses
        .filter((expense) => {
            const createdAtMoment = moment(expense.createdAt);
            const startDateMatch = startDate
                ? startDate.isSameOrBefore(createdAtMoment, 'day')
                : true;
            const endDateMatch = endDate
                ? endDate.isSameOrAfter(createdAtMoment, 'day')
                : true;
            const textMatch = expense.description
                .toLowerCase()
                .includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        })
        // eslint-disable-next-line array-callback-return
        .sort((a, b) => {
            // from highest to lowest value
            if (sortBy === 'date') {
                return a.createdAt < b.createdAt ? 1 : -1;
            } else if (sortBy === 'amount') {
                return a.amount < b.amount ? 1 : -1;
            }
        });

export default getVisibleExpenses;
