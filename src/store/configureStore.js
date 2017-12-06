// Store Creation
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer,
        }),
        composeEnhancers(applyMiddleware(thunk)),
        /* preloadedState, */
        // window.__REDUX_DEVTOOLS_EXTENSION__ &&
        //     window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    return store;
};
