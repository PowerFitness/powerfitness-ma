import { firebase } from '../utils/firebase';
import * as uiActions from './uiActions';

export const setUserAction = (user) => ({ type: 'setUserAction', payload: user });

export const observeLogin = (dispatch) => firebase.auth().onAuthStateChanged(
    (user) => {
        dispatch(setUserAction(user || { loggedOut: true }))
        dispatch(uiActions.setUiAction({ isSignInOpen: false }));
    }
);
