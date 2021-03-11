import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as setUserActions from '../../actions/setUserAction';

export const AuthObserver = ({ dispatch }) => {
    useEffect(() => setUserActions.observeLogin(dispatch), [])
    return null;
}

export default connect()(AuthObserver)
