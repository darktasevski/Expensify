import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => (
    <header>
        <h2>Expensify</h2>
        <NavLink to="/" exact activeClassName="is-active">
            Dashboard
        </NavLink>
        <NavLink to="/create" activeClassName="is-active">
            Add Expense
        </NavLink>
        <NavLink to="/edit" activeClassName="is-active">
            Edit Expense
        </NavLink>
        <NavLink to="/help" activeClassName="is-active">
            Need Help?
        </NavLink>
    </header>
);

export default Header;
