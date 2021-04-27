import { selectedDate } from './dateSelector';

describe('date selector', () =>{
    test('selected date', () => {
        const state = { selectedDate: '04-25-2021' }
        expect (selectedDate(state)).toEqual('04-25-2021')
    })
})
