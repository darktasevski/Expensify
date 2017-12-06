import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addExpense,
  startAddExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({
    id, description, notes, amount, createdAt
  }) => {
    expensesData[id] = {
      description,
      notes,
      amount,
      createdAt,
    };
  });
  database
    .ref('expenses')
    .set(expensesData)
    .then(() => done());
});

// Remove expense test
it('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

it('should remove expense object from database', (done) => {
  const store = createMockStore({});
  const [id] = expenses[1].id;
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id,
    });
  });
  return database
    .ref(`expenses/${id}`)
    .once('value')
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
    })
    .then(() => done());
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

it('should edit expense from database', (done) => {
  const store = createMockStore({});
  const [id] = expenses[0].id;
  const updates = {
    amount: 320.44,
  };
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates,
      });
    })
    .then(() => database
      .ref(`expenses/${id}`)
      .once('value')
      .then((snapshot) => {
        const value = snapshot.val();
        expect(value.amount).toBe(320.44);
      }))
    .then(() => done())
    .catch((err) => {
      console.log(err);
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

it('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    notes: 'This one is better',
    createdAt: 1000,
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

it('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    amount: 0,
    notes: '',
    createdAt: 0,
  };

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

it('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses,
  });
});

it('should fetch the expenses from the firebase', () => {
  const store = createMockStore({});
  return store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    });
  });
});
