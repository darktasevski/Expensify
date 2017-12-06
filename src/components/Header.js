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
  </header>
);

export default Header;
