import { actionTypes } from '../actions/setDateAction';
import dayjs from 'dayjs';

const initialState = dayjs().format('YYYY-MM-DD');

export const selectedDate = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.setDateAction: {
        return action.payload.date
    }
    default:
        return state
    }
}

export default selectedDate;
