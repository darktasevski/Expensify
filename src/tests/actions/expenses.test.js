import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// Remove expense test
it('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc',
    });
});

/* Edit expense test */
it('should setup editing expense action object', () => {
    const action = editExpense('123abc', { desc: 'Expense', amount: 'Pi' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            desc: 'Expense',
            amount: 'Pi',
        },
    });
});

/* Add expense test case */

it('should setup adding new expense action object with provided values', () => {
    const expectedData = {
        description: 'Rent',
        notes: 'pricey',
        amount: 1000,
        createdAt: 1011,
    };
    const action = addExpense(expectedData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expectedData,
            id: expect.any(String),
        },
    });
});

it('should setup adding new expense action object without provided values', () => {
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            notes: '',
            amount: 0,
            createdAt: 0,
        },
    });
});
