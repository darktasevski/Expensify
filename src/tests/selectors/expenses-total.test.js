import SelectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

it('should return 0 if there are no expenses', () => {
    const response = SelectExpensesTotal([]);
    expect(response).toBe(0);
});

it('should correctly add up single expense', () => {
    const response = SelectExpensesTotal([expenses[0]]);
    expect(response).toBe(190);
});

it('should correctly add up multiple expenses', () => {
    const response = SelectExpensesTotal(expenses);
    expect(response).toBe(1600);
});
