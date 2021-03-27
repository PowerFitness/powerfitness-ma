const initialState = {
    weeklyExercise: {
        id: 1,
        planId: 1,
        type: 'exercise',
        name: 'weeklyExercise',
        unit: 'days',
        value: 5,
        createdDate: 'datetime',
        updatedDate: 'datetime',
    },
    dailyExercise: {
        id: 2,
        planId: 1,
        type: 'exercise',
        name: 'dailyExercise',
        unit: 'minutes',
        value: 30,
        createdDate: 'datetime',
        updatedDate: 'datetime',
    },
    dailyWater: {
        id: 3,
        planId: 1,
        type: 'water',
        name: 'dailyWater',
        unit: 'ounces',
        value: 80,
        createdDate: 'datetime',
        updatedDate: 'datetime',
    },
    dailyCalories: {
        id: 4,
        planId: 1,
        type: 'nutrition',
        name: 'dailyCalories',
        unit: 'calories',
        value: 2000,
        createdDate: 'datetime',
        updatedDate: 'datetime',
    }
}

export const goalReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'setWeeklyAction':
        return action.payload;
    default:
        return state
    }
}

export default goalReducer;
