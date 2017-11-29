import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = props => (
    <div>
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                // dispatch the action to edit the expense
                props.dispatch(editExpense(props.expense.id, expense));
                // Redirect to home page
                props.history.push('/');
                console.info('updated', expense);
            }}
        />
        <button
            onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }}
        >
            Remove Expense
        </button>
    </div>
);

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id, ),
});

/* NOTE: In the first pair of the parenthesis we re getting state info,
    but if operation doesn't need to know anything about state, we can leave it blank.
*/
export default connect(mapStateToProps)(EditExpensePage);
