import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2],
    });
});

// it('should setup adding new expense action object without provided values', () => {
//     const action = addExpense({});
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             notes: '',
//             amount: 0,
//             createdAt: 0,
//         },
//     });
// });

// * When testing promises we should return them instead using async testing with done()

it('should add expense to database and store', () => {
    const store = createMockStore({});
    const data = {
        description: 'Phone',
        amount: 230,
        notes: 'Xiaomi',
        createdAt: 1000,
    };
    return store.dispatch(startAddExpense(data)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...data,
            },
        });
        database
            .ref(`expenses/${actions[0].expense.id}`)
            .once('value')
            .then((snapshot) => {
                expect(snapshot.val()).toEqual(data);
            });
    });
});

it('should add expense with defaults to database and store', () => {
    const store = createMockStore({});
    return store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                notes: '',
                amount: 0,
                createdAt: 0,
            },
        });
        database
            .ref(`expenses/${actions[0].expense.id}`)
            .once('value')
            .then((snapshot) => {
                expect(snapshot.val()).toEqual({
                    description: '',
                    notes: '',
                    amount: 0,
                    createdAt: 0,
                });
            });
    });
});
