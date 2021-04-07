export const goals = (state) => state.goalsFetched;

export const goal = (goalName) => (state) => state.goalsFetched[goalName]; // return the goal object
export const goalId = (goalName) => (state) => state.goalsFetched[goalName]?.id;
export const goalValue = (goalName) => (state) => state.goalsFetched[goalName]?.value;

