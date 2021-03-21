
export const isFetchStarted = name => state => state.fetches[name] === 'started';
export const isFetchComplete = name => state => state.fetches[name] === 'complete';
export const isFetchError = name => state => state.fetches[name] === 'error';
