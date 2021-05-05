export const isAuthenticated = state => state.user && Boolean(state.user.uid);
export const isPendingAuthStateChange = state => state.user && !state.user.loggedOut && !state.user.uid;
export const userUniqueId = state => state.user.uid;
export const userName = state => state.user.displayName;

