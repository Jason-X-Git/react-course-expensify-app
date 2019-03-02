import moment from 'moment';
import { setStartDate, setEndDate } from '../../actions/filters';

test('test setStartDate', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})