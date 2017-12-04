import React from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../helpers';
import getVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWording = expenseCount === 1 ? 'expense' : 'expenses';

    return (
        <div>
            <h3>
                {expenseCount} {expenseWording} totaling{' '}
                {formatPrice(expenseTotal)}
            </h3>
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
