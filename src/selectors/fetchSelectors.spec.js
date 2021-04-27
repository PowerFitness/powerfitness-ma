import * as fetchSelectors from './fetchSelectors';

describe('fetchSelectors', () => {
    test('fetch start', () => {
        const url = 'api/plan'
        const state = {
            fetches: {
                'api/plan': 'started'
            }
        }
        expect(fetchSelectors.isFetchStarted(url)(state)).toEqual(true)
    })
    test('fetch complete', () => {
        const url = 'api/plan'
        const state = {
            fetches: {
                'api/plan': 'complete'
            }
        }
        expect(fetchSelectors.isFetchComplete(url)(state)).toEqual(true)
    })
    test('fetch error', () => {
        const url = 'api/plan'
        const state = {
            fetches: {
                'api/plan': 'error'
            }
        }
        expect(fetchSelectors.isFetchError(url)(state)).toEqual(true)
    })
})
