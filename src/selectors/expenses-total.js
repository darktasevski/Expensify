export default expenses =>
    expenses
        .map(expense => expense.amount)
        .reduce((previous, current) => previous + current, 0);
