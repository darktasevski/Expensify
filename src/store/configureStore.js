// Store Creation
import { combineReducers, createStore } from "redux";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer,
        }),
    );
    return store;
};
