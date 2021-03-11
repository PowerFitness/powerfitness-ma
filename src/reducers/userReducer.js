
export const userReducer = (state = {}, action) => {
  switch (action.type) {
  case 'setUserAction':
    return action.payload;
  default:
    return state
  }
}

export default userReducer;
