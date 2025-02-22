// Workout.test.js
import { Workout } from "./Workout.js";

// Apufunktio hakee harjoitus-ID:n käyttäjänimen perusteella
function getWorkoutId(username) {
    // Simuloitu toiminta: oikeassa tapauksessa tämä hakisi tiedot tietokannasta
    return username.length >= 4 ? 1 : null;
}

describe("Workout-luokka", () => {
    describe("Harjoitusten hallinta", () => {
        test("lisää harjoituksen", () => {
            // ARRANGE: Luodaan uusi Workout-olio
            const workout = new Workout();
            
            // ACT: Lisätään harjoitus
            workout.addExercise("kyykyt");
            
            // ASSERT: Tarkistetaan, että harjoitus lisättiin oikein
            expect(workout.getExercises()).toEqual(["kyykyt"]);
        });

        test("poistaa harjoituksen", () => {
            // ARRANGE: Luodaan uusi Workout-olio ja lisätään harjoitus
            const workout = new Workout();
            workout.addExercise("kyykyt");
            
            // ACT: Poistetaan harjoitus
            workout.removeExercise("kyykyt");
            
            // ASSERT: Varmistetaan, että lista on tyhjä
            expect(workout.getExercises()).toEqual([]);
        });

        test("ei poista harjoitusta, jota ei ole lisätty", () => {
            // ARRANGE: Luodaan uusi Workout-olio ja lisätään yksi harjoitus
            const workout = new Workout();
            workout.addExercise("kyykyt");
            
            // ACT: Yritetään poistaa harjoitus, jota ei ole lisätty
            workout.removeExercise("punnerrukset");
            
            // ASSERT: Alkuperäisen harjoituslistan tulisi pysyä muuttumattomana
            expect(workout.getExercises()).toEqual(["kyykyt"]);
        });
    });
});
