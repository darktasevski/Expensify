import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
    <div>
        <h4>{description}</h4>
        <p>
            {amount} -- {new Date(createdAt * 1000).toDateString()}
            <button
                onClick={() => {
                    dispatch(removeExpense({ id }));
                }}
            >
                &times;
            </button>
        </p>
    </div>
);
/* NOTE: In the first pair of the parenthesis we re getting state info,
    but for this operation we dont need to know anything about state, so we can leave it blank.
*/

export default connect()(ExpenseListItem);
