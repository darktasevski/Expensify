import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const Root = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
