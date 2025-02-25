// Workout.js
import logger from "./logger.js"; // Tehtävä 5b: Tuodaan logger käyttöön

export class Workout {
    constructor() {
        this.exercises = [];
        this.workoutId = 1; // Oletetaan yksinkertainen tunniste harjoitukselle
    }

    // Tehtävä 3b: Lisätään validointi käyttäjänimen pituudelle
    createWorkout(username) {
        // Tarkistetaan, että käyttäjänimi on vähintään 4 merkkiä pitkä
        if (!username || username.length < 4) {
            throw new Error("Käyttäjänimen tulee olla vähintään 4 merkkiä pitkä");
        }
        return { id: this.workoutId, username: username, exercises: [] };
    }

    // Tehtävä 5b: Lisätään lokitus addExercise-funktioon
    addExercise(exercise) {
        this.exercises.push(exercise);
        logger.info({
            level: 30,
            time: Date.now(),
            workoutId: this.workoutId,
            exerciseName: exercise,
            msg: `Exercise ${exercise} added to workout ${this.workoutId}`
        });
    }

    // Tehtävä 1b-1d: Harjoitusten lisääminen ja poistaminen
    removeExercise(exercise) {
        this.exercises = this.exercises.filter(e => e !== exercise);
    }

    getExercises() {
        return this.exercises;
    }
}
