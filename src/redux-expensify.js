import { createStore, combineReducers } from "redux";
import uuid from "uuid";
import { formatPrice } from "./helpers";

// Actions
// ADD_EXPENSE
const addExpense = (
    { description = "", notes = "", amount = 0, createdAt = Date.now() } = {},
) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        notes,
        amount: formatPrice(amount),
        createdAt,
    },
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id,
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates,
});

// SET_TEXT_FILTER

const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text,
});

// SORT_BY_DATE

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
});

// SORT_BY_AMOUNT

const sortByDate = () => ({
    type: "SORT_BY_DATE",
});

// SET_START_DATE

const setStartDate = (startDate = null) => ({
    type: "SET_START_DATE",
    startDate,
});

// SET_END_DATE

const setEndDate = (endDate = Date.now()) => ({
    type: "SET_END_DATE",
    endDate,
});

// Expenses reducer
// NOTE: Reducers must be pure functions

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action = {}) => {
    switch (action.type) {
    case "ADD_EXPENSE":
        return [...state, action.expense];
    case "REMOVE_EXPENSE":
        return state.filter(({ id }) => id !== action.id); // TODO: practice more with arr methods...
    case "EDIT_EXPENSE":
        return state.map(expense => {
            if (expense.id === action.id) {
                return { ...expense, ...action.updates };
            }
            return expense;
        });
    default:
        return state;
    }
};

// Filters reducer

const filterReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: null,
    endDate: null,
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
    case "SET_TEXT_FILTER":
        return {
            ...state,
            text: action.text,
        };
    case "SORT_BY_AMOUNT":
        return {
            ...state,
            sortBy: "amount",
        };
    case "SORT_BY_DATE":
        return {
            ...state,
            sortBy: "date",
        };
    case "SET_START_DATE":
        return {
            ...state,
            startDate: action.startDate,
        };
    case "SET_END_DATE":
        return {
            ...state,
            endDate: action.endDate,
        };
    default:
        return state;
    }
};

/* Get Visible Expenses */

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) =>
    expenses
        .filter(expense => {
            const startDateMatch =
                typeof startDate !== "number" || expense.createdAt >= startDate;
            const endDateMatch =
                typeof endDate !== "number" || expense.createdAt <= endDate;
            const textMatch = expense.description
                .toLowerCase()
                .includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        })
        .sort((a, b) => {
            // from highest to lowest value
            if (sortBy === "date") {
                return a.createdAt < b.createdAt ? 1 : -1;
            } else if (sortBy === "amount") {
                return a.amount < b.amount ? 1 : -1;
            }
        });

// Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer,
    }),
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});
const expenseFour = store.dispatch(
    addExpense({ description: "Phone", amount: 1500, createdAt: 133 }),
);
const expenseOne = store.dispatch(
    addExpense({ description: "Rent", amount: 1000, createdAt: 121 }),
);
const expenseTwo = store.dispatch(
    addExpense({ description: "Food", amount: 3000, createdAt: 112 }),
);
// eslint-disable-next-line no-unused-vars
const expenseThree = store.dispatch(
    addExpense({ description: "Coffee", amount: 2000, createdAt: 129 }),
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("ffe"));

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(126));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate(129));

// eslint-disable-next-line no-unused-vars
const demoState = {
    expenses: [
        {
            id: "4d2sa3ds345",
            description: "January rent",
            note: "Final payment!",
            amount: 54500,
            createdAt: 0,
        },
    ],
    filters: {
        text: "rent",
        sortBy: "amount", // Date or amount
        startDate: null,
        endDate: null,
    },
};
