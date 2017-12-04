import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        // dispatch the action to edit the expense
        this.props.editExpense(this.props.expense.id, expense);
        // Redirect to home page
        this.props.history.push('/');
        console.info('updated', expense);
    };

    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove Expense</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id, ),
});

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: data => dispatch(removeExpense(data)),
});

/* NOTE: In the first pair of the parenthesis we re getting state info,
    but if operation doesn't need to know anything about state, we can leave it blank.
*/
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
