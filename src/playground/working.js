


<form onSubmit={this.onSubmit}>
    <input
        type="text"
        placeholder="Description"
        autoFocus
        value={this.state.description}
        onChange={this.onDescriptionChange}
    />
    <input
        type="text"
        placeholder="Amount"
        value={this.state.amount}
        onChange={this.onAmountChange}
    />
    <SingleDatePicker
        date={this.state.createdAt}
        onDateChange={this.onDateChange}
        focused={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
    />
    <textarea
        type="text"
        placeholder="Notes"
        value={this.state.note}
        onChange={this.onNoteChange}
    />
    <button type="submit">Add Expense</button>
</form>