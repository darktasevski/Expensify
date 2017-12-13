import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    // dispatch the action to edit the expense
    this.props.startEditExpense(this.props.expense.id, expense);
    // Redirect to home page
    this.props.history.push('/');
    console.info('updated', expense);
  };

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h3 className="page-header__title">Edit Page</h3>
          </div>
        </div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
          path={this.props.match.path}
        />
        <div className="content-container--center">
          <button className="button button--remove" onClick={this.onRemove}>
            Remove Expense
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data)),
});

/* NOTE: In the first pair of the parenthesis we re getting state info,
    but if operation doesn't need to know anything about state, we can leave it blank.
*/
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
