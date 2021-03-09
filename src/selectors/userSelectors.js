export const isAuthenticated = state => state.user && Object.keys(state.user).length !== 0;
export const isPendingAuthStateChange = state => state.user && Object.keys(state.user).length === 0;