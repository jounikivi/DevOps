// Workout.test.js
import { Workout } from "./Workout.js";

test("should add an exercise", () => {
    // ARRANGE: Luodaan uusi Workout-olio
    const workout = new Workout();
    
    // ACT: Lisätään harjoitus "squats"
    workout.addExercise("squats");

    // ASSERT: Tarkistetaan, että harjoitus lisättiin oikein
    expect(workout.getExercises()).toEqual(["squats"]); // MATCHER: Jestin .toEqual vertaa listan sisältöä
});

test("should remove an exercise", () => {
    // ARRANGE: Luodaan uusi Workout-olio ja lisätään harjoitus
    const workout = new Workout();
    workout.addExercise("squats");

    // ACT: Poistetaan harjoitus "squats"
    workout.removeExercise("squats");

    // ASSERT: Varmistetaan, että lista on tyhjä
    expect(workout.getExercises()).toEqual([]); // MATCHER: Varmistaa, että lista on täysin tyhjä
});

test("should not remove an exercise that does not exist", () => {
    // ARRANGE: Luodaan uusi Workout-olio ja lisätään yksi harjoitus
    const workout = new Workout();
    workout.addExercise("squats");

    // ACT: Yritetään poistaa harjoitus "push-ups", jota ei ole lisätty
    workout.removeExercise("push-ups");

    // ASSERT: Varmistetaan, että alkuperäinen harjoitus on yhä listalla
    expect(workout.getExercises()).toEqual(["squats"]); // MATCHER: Varmistaa, että "squats" ei poistunut vahingossa
});

