import * as createDefaultGoals from './createDefaultGoals';

describe('createDefaultGoals', () => {
    test('DailyExerciseGoal', () => {
        const value = 30;
        expect(createDefaultGoals.createDefaultDailyExerciseGoal(value)).toEqual(
            { type: 'exercise',
                name: 'dailyExercise',
                unit: 'minutes',
                value: 30
            })
    })
    test('WeeklyExerciseGoal', () => {
        const value = 3;
        expect(createDefaultGoals.createDefaultWeeklyExerciseGoal(value)).toEqual(
            { type: 'exercise',
                name: 'weeklyExercise',
                unit: 'days',
                value: 3
            })
    })
    test('WaterGoal', () => {
        const value = 50;
        expect(createDefaultGoals.createDefaultWaterGoal(value)).toEqual(
            { type: 'water',
                name: 'dailyWater',
                unit: 'ounces',
                value: 50
            })
    })
    test('CalorieGoal', () => {
        const value = 2000;
        expect(createDefaultGoals.createDefaultCalorieGoal(value)).toEqual(
            { type: 'nutrition',
                name: 'dailyCalories',
                unit: 'calories',
                value: 2000
            })
    })
})
