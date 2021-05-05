import * as userReducer from './userReducer';

describe('userReducer', () => {
    test('user reducer', () => {
        const state = {}
        const action = { type: 'setUserAction', payload: {
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
        expect(userReducer.userReducer(state, action)).toEqual({
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
        })
    })
})
