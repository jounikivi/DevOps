import { Workout } from './Workout'; // Ensure correct import

test('should add an exercise to the workout', () => {
    const workout = new Workout();
    workout.addToWorkout("squads");
    expect(workout.exercises).toEqual(["squads"]);
});

test('should remove an exercise from the workout', () => {
    const workout = new Workout();
    workout.addToWorkout("squads");  // First, add the exercise
    workout.removeFromWorkout("squads"); // Then remove it
    expect(workout.exercises).toEqual([]);
});
