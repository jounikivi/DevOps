import Workout from '../Workout';

test('test', () => {
    const workout = new Workout();
    workout.addToWorkout("squads");
    expect(workout.exercises).toEqual(["squads"]);
});

test('test', () => {
    const workout = new Workout();
    workout.removeFromWorkout("squads");
    expect(workout.exercises).toEqual([]);
});