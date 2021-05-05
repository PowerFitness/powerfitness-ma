import * as setDateAction from './setDateAction';

describe('setDateAction', () => {
    test('setDateAction', () => {
        const date = '2021-11-30';
        expect(setDateAction.setDateAction(date)).toEqual(
            {
                type:'setDateAction',
                payload: { date:'2021-11-30' }
            })
    })
})
