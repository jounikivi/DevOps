// Workout.test.js
import { Workout } from "../Workout.js";

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

    describe("createWorkout-funktion testaus", () => {
        test("heittää virheen, jos käyttäjänimi puuttuu", () => {
            // ARRANGE: Luodaan uusi Workout-olio
            const workout = new Workout();
            
            // ACT & ASSERT: Tarkistetaan, että virhe heitetään
            expect(() => workout.createWorkout(""))
                .toThrow("Käyttäjänimen tulee olla vähintään 4 merkkiä pitkä");
        });

        test("heittää virheen, jos käyttäjänimi on liian lyhyt", () => {
            // ARRANGE: Luodaan uusi Workout-olio
            const workout = new Workout();
            
            // ACT & ASSERT: Tarkistetaan, että virhe heitetään
            expect(() => workout.createWorkout("abc"))
                .toThrow("Käyttäjänimen tulee olla vähintään 4 merkkiä pitkä");
        });

        test("luo harjoituksen onnistuneesti kelvollisella käyttäjänimellä", () => {
            // ARRANGE: Luodaan uusi Workout-olio
            const workout = new Workout();
            
            // ACT: Luodaan harjoitus
            const result = workout.createWorkout("testikäyttäjä");
            
            // ASSERT: Tarkistetaan, että harjoitus luotiin oikein
            expect(result).toEqual({ id: 1, username: "testikäyttäjä", exercises: [] });
        });
    });
});
