import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";
import getVisibleExpenses from "./selectors/expenses";
import { addExpense } from "./actions/expenses";

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(
    addExpense({
        description: "Food",
        amount: 5000,
        createdAt: 456456,
        notes: "Nom-nom",
    }),
);

store.dispatch(
    addExpense({
        description: "Water bill",
        amount: 8000,
        createdAt: 356321,
        notes: "Wet",
    }),
);

store.dispatch(
    addExpense({
        description: "Electricity",
        amount: 150000,
        createdAt: 568636,
    }),
);

store.dispatch(
    addExpense({
        description: "Books",
        amount: 15000,
        createdAt: 88888,
    }),
);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
