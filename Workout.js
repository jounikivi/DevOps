// Workout.js
export class Workout {
  constructor() {
      this.exercises = [];
  }

  addExercise(exercise) {
      this.exercises.push(exercise);
  }

  removeExercise(exercise) {
      const index = this.exercises.indexOf(exercise);
      if (index > -1) {
          this.exercises.splice(index, 1);
      }
  }

  getExercises() {
      return this.exercises;
  }
}
