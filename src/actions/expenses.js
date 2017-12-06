import database from '../firebase/firebase';

// * Actions workflow
// ? component calls action generator
// ? action generator returns function
// ? component dispatches function (redux middleware)(redux-thunk?)
// ? redux store changes

// ADD_EXPENSE
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const startAddExpense = (expenseData = {}) => (dispatch) => {
  // set defaults and destructure from expenseData
  const {
    description = '',
    notes = '',
    amount = 0,
    createdAt = 0,
  } = expenseData;
  const expense = {
    description,
    notes,
    amount,
    createdAt,
  };
  return database
    .ref('expenses')
    .push(expense)
    .then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense,
      }), );
    });
};
// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const startRemoveExpense = ({ id } = {}) => dispatch =>
  database
    .ref(`expenses/${id}`)
    .remove()
    .then(() => {
      dispatch(removeExpense({ id }));
    });

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

export const startEditExpense = (id, updates) => dispatch =>
  database
    .ref(`expenses/${id}`)
    .update(updates)
    .then(() => dispatch(editExpense(id, updates)));

// SET_EXPENSES
export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startSetExpenses = () => dispatch =>
  database
    .ref('expenses')
    .once('value')
    .then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      dispatch(setExpenses(expenses));
    });
