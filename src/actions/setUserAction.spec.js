import * as setUserAction from './setUserAction';
const mockonAuthStateChanged = jest.fn();
jest.mock('../utils/firebase', () => ({
    firebase: {
        auth: () => ({
            onAuthStateChanged: mockonAuthStateChanged
        })
    }
}));

describe('setUserAction', () => {
    test('setUserAction', () => {
        const user =
        {
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
        };
        expect(setUserAction.setUserAction(user)).toEqual(
            {
                type:'setUserAction',
                payload: {
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
            })
    })
    test('observeLogin', () =>{
        const dispatch = jest.fn();
        mockonAuthStateChanged.mockImplementationOnce(() => dispatch({
            uid: 'abc',
            displayName: 'John'
        }))
        setUserAction.observeLogin(dispatch)
        expect(dispatch).toHaveBeenCalledWith({
            uid: 'abc',
            displayName: 'John'
        })
    })
})
