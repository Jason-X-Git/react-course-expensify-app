import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expenseTotal, userName }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    <span>{userName}</span> has 
                <span> {expenseCount} </span>
                 {expenseWord} totaling 
                 <span> {formattedExpensesTotal}</span>
                 </h1>
                 <div className="page-header__actions">
                    <Link to="/create" className="button">Add Expense</Link>
                 </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    const userName = state.auth.userName;
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        userName,
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);