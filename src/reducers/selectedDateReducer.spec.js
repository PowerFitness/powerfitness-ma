import * as selectedDateReducer from './selectedDateReducer';

describe('selectedDateReducer', () => {
    test('selected Date reducer', () => {
        const state = {}
        const action = { type: 'setDateAction', payload: { date: '2021-12-31' } }
        expect(selectedDateReducer.selectedDate(state, action)).toEqual('2021-12-31')
    })
})
