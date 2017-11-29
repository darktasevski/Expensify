import uuid from "uuid";
import { formatPrice } from "../helpers";

// Expenses Actions

// ADD_EXPENSE
export const addExpense = (
    { description = "", notes = "", amount = 0, createdAt = Date.now() } = {},
) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        notes,
        amount,
        createdAt,
    },
});
// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id,
});
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates,
});
