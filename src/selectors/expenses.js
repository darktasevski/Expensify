const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) =>
    expenses
        .filter(expense => {
            const startDateMatch =
                typeof startDate !== "number" || expense.createdAt >= startDate;
            const endDateMatch =
                typeof endDate !== "number" || expense.createdAt <= endDate;
            const textMatch = expense.description
                .toLowerCase()
                .includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        })
        .sort((a, b) => {
            // from highest to lowest value
            if (sortBy === "date") {
                return a.createdAt < b.createdAt ? 1 : -1;
            } else if (sortBy === "amount") {
                return a.amount < b.amount ? 1 : -1;
            }
        });

export default getVisibleExpenses;
