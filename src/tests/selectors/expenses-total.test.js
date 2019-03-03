import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should reture 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
})

test('should corrrectly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
})

test('should corrrectly add up multiple expense', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
})