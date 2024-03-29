import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should cooorectly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />)
    expect(wrapper).toMatchSnapshot();
});

test('should cooorectly render ExpensesSummary with mutiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={41552144} />)
    expect(wrapper).toMatchSnapshot();
});