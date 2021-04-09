
export const isFetchStarted = url => state => state.fetches[url] === 'started';
export const isFetchComplete = url => state => state.fetches[url] === 'complete';
export const isFetchError = url => state => state.fetches[url] === 'error';
