import * as userSelectors from './userSelectors';

describe('userSelectors', () => {
    test('user authentication', () => {
        const state = {
            user: {
                uid: 'abc',
                displayName: 'John',
                photoURL: 'https://mnc.jpg',
                email: 'john@abc.com',
                emailVerified: true,
                phoneNumber: null,
                isAnonymous: false,
                tenantId: null,
                providerData: [
                    {
                        uid: '12345',
                        displayName: 'John',
                        photoURL: 'https://mnc.jpg',
                        email: 'john@abc.com',
                        phoneNumber: null,
                        providerId: 'mnc.com'
                    }
                ]
            }
        }
        expect(userSelectors.isAuthenticated(state)).toEqual(true)
    })
    test('user authentication - no user details', () => {
        const state = {
            user: {}
        }
        expect(userSelectors.isAuthenticated(state)).toEqual(false)
    })
    test('user pending authentication', () => {
        const state = {
            user: {
                uid: 'abc',
                displayName: 'John',
                photoURL: 'https://mnc.jpg',
                email: 'john@abc.com',
                emailVerified: true,
                phoneNumber: null,
                isAnonymous: false,
                tenantId: null,
                providerData: [
                    {
                        uid: '12345',
                        displayName: 'John',
                        photoURL: 'https://mnc.jpg',
                        email: 'john@abc.com',
                        phoneNumber: null,
                        providerId: 'mnc.com'
                    }
                ]
            }
        }
        expect(userSelectors.isPendingAuthStateChange(state)).toEqual(false)
    })
    test('user pending authentication', () => {
        const state = {
            user: {}
        }
        expect(userSelectors.isPendingAuthStateChange(state)).toEqual(true)
    })
    test('user id check', () => {
        const state = {
            user: {
                uid: 'abc'
            }
        }
        expect(userSelectors.userUniqueId(state)).toEqual('abc')
    })
    test('user name check', () => {
        const state = {
            user: {
                displayName: 'John'
            }
        }
        expect(userSelectors.userName(state)).toEqual('John')
    })
})
