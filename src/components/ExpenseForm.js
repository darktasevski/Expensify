import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize'; // NOTE: React-dates not working without initializing them first
import { SingleDatePicker } from 'react-dates';
// import { formatPr ice } from '../helpers';

const now = moment();
// console.log(now.format('MMM Do, Y'));

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense
                ? (props.expense.amount / 100).toString()
                : '',
            notes: props.expense ? props.expense.notes : '',
            createdAt: props.expense
                ? moment(props.expense.createdAt)
                : moment(),
            dateFocused: false,
            error: '',
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNotesChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({ notes }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        // Regex to format price to max 2 decimal points *
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ dateFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            // Set error state
            const error = 'Please provide description and amount.';
            this.setState((state, props) => ({ error }));
        } else {
            // Clear the error
            this.setState(() => ({ error: '' }));

            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                notes: this.state.notes,
                createdAt: this.state.createdAt.valueOf(),
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        required
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
                        focused={this.state.dateFocused} // PropTypes.bool
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        name="notes"
                        cols="30"
                        rows="10"
                        value={this.state.notes}
                        onChange={this.onNotesChange}
                        placeholder="Expense Notes"
                    />
                    <button type="submit">Add Expense</button>
                </form>
            </div>
        );
    }
}

/**

/^\d*(\.\d{0,2})?$/

^ asserts position at start of the string
\d* matches a digit (equal to [0-9])
* Quantifier — Matches between zero and unlimited times, as many times as possible, giving back as needed (greedy)
1st Capturing Group (\.\d{0,2})?
? Quantifier — Matches between zero and one times, as many times as possible, giving back as needed (greedy)
\. matches the character . literally (case sensitive)
\d{0,2} matches a digit (equal to [0-9])
{0,2} Quantifier — Matches between 0 and 2 times, as many times as possible, giving back as needed (greedy)
$ asserts position at the end of the string, or before the line terminator right at the end of the string (if any)

 */
