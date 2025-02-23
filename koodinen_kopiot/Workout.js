// Workout.js
export class Workout {
    constructor() {
        this.exercises = [];
    }

    createWorkout(username) {
        // 🔹 VALIDOINNIN LISÄYS TÄHÄN KOHTAAN
        if (!username || username.length < 4) {
            throw new Error("Käyttäjänimen tulee olla vähintään 4 merkkiä pitkä");
        }
        
        return { id: 1, username: username, exercises: [] };
    }

    addExercise(exercise) {
        this.exercises.push(exercise);
    }

    removeExercise(exercise) {
        this.exercises = this.exercises.filter(e => e !== exercise);
    }

    getExercises() {
        return this.exercises;
    }
}
