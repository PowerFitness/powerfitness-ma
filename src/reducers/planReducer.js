
const initialState = {
    id: 1,
    userUniqueId: '1234',
    motivationStatement: 'This is my motivation statement',
    createdDate: 'datetime',
    lastUpdatedDate: 'datetime',
};


export const planReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'setPlanAction':
        return action.payload;
    default:
        return state
    }
}

export default planReducer;
