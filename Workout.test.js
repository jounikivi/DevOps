// Workout.test.js
import { Workout } from "./Workout.js";

test("should add an exercise", () => {
    const workout = new Workout();
    workout.addExercise("squats");
    expect(workout.getExercises()).toEqual(["squats"]);
});

test("should remove an exercise", () => {
    const workout = new Workout();
    workout.addExercise("squats");
    workout.removeExercise("squats");
    expect(workout.getExercises()).toEqual([]);
});

test("should not remove an exercise that does not exist", () => {
    const workout = new Workout();
    workout.addExercise("squats");
    workout.removeExercise("push-ups");
    expect(workout.getExercises()).toEqual(["squats"]);
});
