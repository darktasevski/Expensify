import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

/* eslint-disable no-shadow */
export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
