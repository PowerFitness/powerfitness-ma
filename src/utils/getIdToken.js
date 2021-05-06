import { firebase } from './firebase';

export const getIdToken = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().currentUser.getIdToken(true).then((idToken) => {
            resolve(idToken)
        }).catch((error) => {
            reject(error)
        })
    })
}
