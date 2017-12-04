import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseListFilters from './components/ExpenseListFilters';
import ExpensesSummary from './components/ExpensesSummary';

class App extends Component {
    render() {
        return (
            <div>
                <ExpensesSummary />
                <ExpenseListFilters />
                <ExpenseList />
            </div>
        );
    }
}

export default App;
