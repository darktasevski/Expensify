import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

/* eslint-disable no-shadow */
export const Header = ({ startLogout }) => (
  <header className="header">
    <Link className="header__title" to="/dashboard" exact>
      <h2>Expensify</h2>
    </Link>
    <button className="button" onClick={startLogout}>
      Logout
    </button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
