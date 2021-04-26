export const nutritionResultSum = (date) => (state) => {
    if(state.resultsFetched[date]){
        const { nutrition = [] } = state.resultsFetched[date];
        let sumN=0;
        nutrition.forEach(result => {
            sumN += result.value;
        });
        return sumN;
    }
    return 0;
}

export const waterResultSum = (date) => (state) => {
    if(state.resultsFetched[date]){
        const { water = [] } = state.resultsFetched[date];
        let sumW=0;
        water.forEach(result => {
            sumW += result.value;
        });
        return sumW;
    }
    return 0;
}

export const exerciseResultSum = (date) => (state) => {
    if(state.resultsFetched[date]){
        const { exercise = [] } = state.resultsFetched[date];
        let sumE=0;
        exercise.forEach(result => {
            sumE += result.value;
        });
        return sumE;
    }
    return 0;
}

export const getExercises = (date) => (state) => {
    const exercises = state.resultsFetched[date]?.exercise?.filter(item => item.type === 'exercise' );
    return exercises || [];
}

export const getWaterQuantities = (date) => (state) => {
    const waterQuantities = state.resultsFetched[date]?.water?.filter(item => item.type === 'water');
    return waterQuantities;
}

export const getBreakfastItems = (date) => (state) => {
    const breakfastItems = state.resultsFetched[date]?.nutrition?.filter(item => item.subtype === 'breakfast');
    return breakfastItems;
}

export const getLunchItems = (date) => (state) => {
    const lunchItems = state.resultsFetched[date]?.nutrition?.filter(item => item.subtype === 'lunch');
    return lunchItems;
}

export const getDinnerItems = (date) => (state) => {
    const dinnerItems = state.resultsFetched[date]?.nutrition?.filter(item => item.subtype === 'dinner');
    return dinnerItems;
}

export const resultsFetchComplete = (date, userUniqueId) => (state) => {
    const constructedKey = '/api/powerfitness/results?userUniqueId=' + userUniqueId + '&date=' + date
    if(state.fetches[constructedKey] === 'complete'){
        return true;
    }

    return false;
}
