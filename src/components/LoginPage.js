import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

/* eslint-disable no-shadow */
export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h2 className="box-layout__title">Expensify</h2>
      <p>Get your expenses under control!</p>
      <button onClick={startLogin}>Login</button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
