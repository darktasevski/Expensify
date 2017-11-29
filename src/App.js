import React, { Component } from "react";
import "normalize.css/normalize.css";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseListFilters from "./components/ExpenseListFilters";

class App extends Component {
    render() {
        return (
            <div>
                <ExpenseListFilters />
                <ExpenseList />
            </div>
        );
    }
}

export default App;
