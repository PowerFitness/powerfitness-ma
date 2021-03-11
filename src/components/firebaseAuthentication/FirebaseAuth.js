import React from 'react';
import { firebase } from '../../utils/firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styled from 'styled-components';

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/dashboard',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
};

const StyledFirebaseAuthPF = styled(StyledFirebaseAuth)`
	.firebaseui-idp-password, .firebaseui-id-submit  {
		background-color: #0081AF !important;
		color: white !important;
	}

	.firebaseui-id-secondary-link {
		color: #0081AF !important;
	}

	.input-field input[type=text]:focus {
		border-bottom: 1px solid #000;
		box-shadow: 0 1px 0 0 #000;
	}

	.firebaseui-textfield.mdl-textfield .firebaseui-label:after {
		background-color: #0081AF !important;
	}

	.mdl-shadow--2dp {
		box-shadow: none;
		width: 400px;
	}
`;

export const Auth = () => {
    return <StyledFirebaseAuthPF uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
}

export default Auth;
