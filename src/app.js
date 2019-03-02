import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AppRouter from './routers/AppRouter'
// import IndecisionApp from './components/IndecisionApp'
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'
import './styles/style.scss'

console.log('Expensify App is running')

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses)
// })

// store.dispatch(addExpense({ description: 'Testing', amount: 30, createdAt: 1500 }))
// store.dispatch(addExpense({ description: 'Coffee', amount: 111, createdAt: 2000 }))
// store.dispatch(addExpense({ description: 'Lunch', amount: 15, createdAt: 9000 }))
// store.dispatch(addExpense({ description: 'Edward Dinner', amount: 50, createdAt: 3000 }))
// store.dispatch(addExpense({ description: 'Mami Dinner', amount: 100, createdAt: 3000 }))
// store.dispatch(addExpense({ description: 'Mami Dinner', amount: 33, createdAt: 16522 }))

// store.dispatch(setTextFilter('coffee'))

// setTimeout(()=> {
//     store.dispatch(setTextFilter('lunch'))
//     // const state = store.getState();
//     // const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     // console.log(visibleExpenses)
// }, 3000)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

console.log(store.getState());
console.log('testing !!!')

ReactDOM.render(jsx, document.getElementById('app'));