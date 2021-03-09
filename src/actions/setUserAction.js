import { firebase } from '../utils/firebase';

export const setUserAction = (user) => ({ type: 'setUserAction', payload: user });

export const observeLogin = (dispatch) => firebase.auth().onAuthStateChanged((user) => dispatch(setUserAction(user)))