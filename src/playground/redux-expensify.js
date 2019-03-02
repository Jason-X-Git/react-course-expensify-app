import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

console.log('redux-expensify is running')

//ADD_EXPENSE

const addExpense = (
    { description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const setStartDate = (startDate = 0) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate = 0) => ({
    type: 'SET_END_DATE',
    endDate
});

const demoState = {
    expenses: [{
        id: 'dadatgq',
        description: 'Rent',
        note: 'Final paymemt',
        amoount: 56300,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: undefined,
        startDate: undefined,
        endDate: undefined
    }
};

const expenseReducerDefaultState = demoState.expenses;

const expenseReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            });

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
}

const filterReducerDefaultState = demoState.filters;

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };

        default:
            return state;
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        // const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        const textMatch = true;

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }

    })
}

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

// console.log(store.getState())

const expensOne = store.dispatch(addExpense({ description: 'Testing', amount: 30, createdAt: 1500 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 111, createdAt: 2000 }))
const expenseThree = store.dispatch(addExpense({ description: 'Beef', amount: 555, createdAt: 2000 }))

// store.dispatch(removeExpense({ id: expenseTwo.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, {
//     amount: 500,
//     description: 'High Quality Coffee'
// }))


// store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

// const user = {
//     name: 'Jason',
//     age: 55
// }

// console.log({
//     ...user,
//     age:33,
//     location: 'Calgary'
// })

