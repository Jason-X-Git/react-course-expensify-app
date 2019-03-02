import { addExpense, editExpense, removeExpense }  from '../../actions/expenses';

test('shoud setup remove expense action object', () => {
    const action = removeExpense( { id: '123abc'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })

});

test('shoudl setup edit expense action object', () => {
    const action = editExpense('123abc', { description: 'Sugar'})

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'Sugar'
        }
    })
});

test('shoudl setup add expens action object with default values', () => {
    const action = addExpense({});

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})

