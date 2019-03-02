import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense, index) => (
            <ExpenseListItem key={expense.id} {...expense} count={index+1}/>
        ))}
    </div>
);

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList)

// export default ConnectedExpenseList;

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);

