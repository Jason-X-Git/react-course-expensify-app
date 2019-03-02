import { createStore } from 'redux';

console.log('redux-101 is running')

const incrementCount = ({ incrementBy = 33 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 33 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
});

// Reducers

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': {

            return {
                count: state.count + action.incrementBy
            }
        };

        case 'SET': {
            return {
                count: action.count
            }
        };

        case 'DECREMENT': {

            return {
                count: state.count - action.decrementBy
            }
        };

        case 'RESET': {
            return {
                count: 0
            }
        };

        default:
            return state;
    }
}

const store = createStore(countReducer);

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 55 }));

// store.dispatch(decrementCount({ decrementBy: 55 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 666 }));

// // unsubscribe();

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

// store.dispatch({
//     type: 'DECREMENT',
// });



// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'SET',
//     count: 900
// })