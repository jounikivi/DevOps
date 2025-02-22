// Workout.test.js
import { Workout } from "./Workout.js";

// Utility function to retrieve a workout ID based on username
function getWorkoutId(username) {
    // Simulated function: In real cases, this would query a database
    return username.length >= 4 ? 1 : null;
}

describe("Workout class", () => {
    describe("Exercise management", () => {
        test("should add an exercise", () => {
            // ARRANGE: Create a new Workout instance
            const workout = new Workout();
            
            // ACT: Add an exercise
            workout.addExercise("squats");
            
            // ASSERT: Check that the exercise was added
            expect(workout.getExercises()).toEqual(["squats"]);
        });

        test("should remove an exercise", () => {
            // ARRANGE: Create a new Workout instance and add an exercise
            const workout = new Workout();
            workout.addExercise("squats");
            
            // ACT: Remove the exercise
            workout.removeExercise("squats");
            
            // ASSERT: Ensure the list is empty
            expect(workout.getExercises()).toEqual([]);
        });

        test("should not remove an exercise that does not exist", () => {
            // ARRANGE: Create a new Workout instance and add one exercise
            const workout = new Workout();
            workout.addExercise("squats");
            
            // ACT: Try to remove an exercise that was never added
            workout.removeExercise("pushups");
            
            // ASSERT: The original exercise list should remain unchanged
            expect(workout.getExercises()).toEqual(["squats"]);
        });
    });
});
