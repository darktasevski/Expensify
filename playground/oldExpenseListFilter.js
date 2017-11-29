const ExpenseListFilters = props => (
    <div>
        <input
            type="text"
            name="filter"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }}
        />
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === 'date') {
                    props.dispatch(sortByDate());
                } else if (e.target.value === 'amount') {
                    props.dispatch(sortByAmount());
                }
            }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <DayPickerRangeController
            startDate={props.filters.startDate} // momentPropTypes.momentObj or null,
            endDate={props.filters.endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
            } // PropTypes.func.isRequired,
            focusedInput={props.filters.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
    </div>
);
