// Workout.js

export class Workout {
    constructor() {
        this.exercises = [];
    }

    // Tehtävä 3b: Lisätään validointi käyttäjänimen pituudelle
    createWorkout(username) {
        // Tarkistetaan, että käyttäjänimi on vähintään 4 merkkiä pitkä
        if (!username || username.length < 4) {
            throw new Error("Käyttäjänimen tulee olla vähintään 4 merkkiä pitkä");
        }
        return { id: 1, username: username, exercises: [] };
    }

    // Tehtävä 1b-1d: Harjoitusten lisääminen ja poistaminen
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
