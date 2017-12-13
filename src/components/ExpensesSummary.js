import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatPrice } from '../helpers';
import getVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWording = expenseCount === 1 ? 'expense' : 'expenses';

  return (
    <div className="page-header">
      <div className="content-container">
        <h3 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWording} totaling{' '}
          <span>{formatPrice(expenseTotal)}</span>
        </h3>
        <Link to="/create" className="button">
          Add Expense
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
