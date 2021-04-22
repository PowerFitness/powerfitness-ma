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
