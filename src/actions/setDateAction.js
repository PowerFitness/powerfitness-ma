export const actionTypes = {
    setDateAction: 'setDateAction'
}

export const setDateAction = (date) => {
    return {
        type: actionTypes.setDateAction,
        payload: { date }
    }
}
